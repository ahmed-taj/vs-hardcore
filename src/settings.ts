// Packages
import * as vscode from "vscode";

/**
 * Setup Hardcore Mode settings
 */
export function setup(disable: boolean = false) {
	// Target the user/global configurations
	const glob = vscode.ConfigurationTarget.Global;

	// To reset a configuration value we use "undefined"
	const reset = undefined;

	// Workbench
	// =========
	const workbench = vscode.workspace.getConfiguration("workbench");

	// Disable Tabs
	workbench.update("editor.showTabs", disable ? reset : false, glob);
	// Hide Activity Bar
	workbench.update("activityBar.visible", disable ? reset : false, glob);

	// Explorer
	// ========
	const explorer = vscode.workspace.getConfiguration("explorer");

	// Hide Open editors
	explorer.update("openEditors.visible", disable ? reset : 0, glob);

	// Window
	// ========
	const window = vscode.workspace.getConfiguration("window");

	// A setting of 'toggle' means that the menu bar is hidden and a single
	// press of the Alt key will show it
	window.update("menuBarVisibility", disable ? reset : "toggle", glob);
}

/**
 * Reset default User settings
 */
export function reset() {
	setup(true);
}
