// Native
import { platform } from "os";

// Packages
import * as assert from "assert";
import { workspace } from "vscode";

// Ours
import { setup, reset } from "../settings";

const os = platform();

suite("Settings", function() {
	test("Setup configurations", async () => {
		// Run!
		await setup();

		// Workbench
		const wb = workspace.getConfiguration("workbench");
		assert.equal(wb.get("editor.showTabs"), false);
		assert.equal(wb.get("activityBar.visible"), false);

		// Window
		const w = workspace.getConfiguration("window");
		if (os !== "darwin") {
			assert.equal(w.get("menuBarVisibility"), "toggle");
		}

		// Explorer
		const e = workspace.getConfiguration("explorer");
		assert.equal(e.get("openEditors.visible"), false);
	});

	test("Reset configurations", async () => {
		// Run!
		await reset();

		// Workbench
		const wb = workspace.getConfiguration("workbench");
		assert.equal(wb.get("editor.showTabs"), true);
		assert.equal(wb.get("activityBar.visible"), true);

		// Window
		const w = workspace.getConfiguration("window");
		if (os !== "darwin") {
			assert.equal(w.get("menuBarVisibility"), "default");
		}

		// Explorer
		const e = workspace.getConfiguration("explorer");
		assert.equal(e.get("openEditors.visible"), 9);
	});
});
