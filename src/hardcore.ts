// Packages
import { ExtensionContext } from "vscode";

// Ours
import { setup, reset } from "./settings";

// This method is called when the extension is activated
export function activate(ctx: ExtensionContext) {
	// Setup Configurations
	// =================
	setup();
}

// This method is called when the extension is deactivated
export function deactivate() {
	// Reset configuations to its default
	reset();
}
