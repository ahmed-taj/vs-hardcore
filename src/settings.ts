// Packages
import { workspace, ConfigurationTarget, WorkspaceConfiguration } from "vscode";

/**
 * Apply given configuration to user/global settings
 *
 * @param config Target configuration section
 * @param k Configuration name
 * @param v New value
 */
const apply = async (config: WorkspaceConfiguration, k: string, v: any) => {
	return config.update(k, v, ConfigurationTarget.Global);
};

/**
 * Setup Hardcore Mode settings
 */
const setup = async (disable: boolean = false) => {
	// To reset a configuration value we use "undefined"
	const reset = undefined;

	// Workbench
	// =========
	const workbench = workspace.getConfiguration("workbench");

	// Disable Tabs
	await apply(workbench, "editor.showTabs", disable ? reset : false);
	// Hide Activity Bar
	await apply(workbench, "activityBar.visible", disable ? reset : false);

	// Explorer
	// ========
	const explorer = workspace.getConfiguration("explorer");

	// Hide Open editors
	await apply(explorer, "openEditors.visible", disable ? reset : 0);

	// Window
	// ========
	const window = workspace.getConfiguration("window");

	// A setting of 'toggle' means that the menu bar is hidden and a single
	// press of the Alt key will show it
	await apply(window, "menuBarVisibility", disable ? reset : "toggle");
};

/**
 * Reset default User settings
 */
const reset = async () => {
	return setup(true);
};

export { reset, setup };
