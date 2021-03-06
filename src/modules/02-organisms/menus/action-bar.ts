import * as ActionButton from '../../00-atoms/buttons/action-button';
import * as ActionBarMenu from '../../01-molecules/menus/action-bar-menu';

export class ActionBar {
	theme: string = "default";
	actionButton: ActionButton.IActionButton;
	actionBarMenu: ActionBarMenu.IActionBarMenu;
	constructor(actionBar: IActionBar) {
		if (actionBar.theme !== undefined) this.theme = actionBar.theme;
		this.actionButton = actionBar.actionButton;
		this.actionBarMenu = actionBar.actionBarMenu;

		if (actionBar.actionButton.theme == undefined) actionBar.actionButton.theme = this.theme;
		if (actionBar.actionBarMenu.theme == undefined) actionBar.actionBarMenu.theme = this.theme;
	}

	public createModuleElement() {
		let actionButtonElement = ActionButton.getModule(this.actionButton);
		let actionBarMenuElement =  ActionBarMenu.getModule(this.actionBarMenu);
		return `${actionButtonElement} ${actionBarMenuElement}`
	}

}

export interface IActionBar{
	theme?: string;
	actionButton: ActionButton.IActionButton;
	actionBarMenu: ActionBarMenu.IActionBarMenu;
}

export function getModule(actionBar: IActionBar){
	return new ActionBar(actionBar).createModuleElement();
}
