import * as Dragula from 'dragula';

const Style = require<any>("../../../../src/modules/01-molecules/lists/dragable-list.scss");

export class DragableList {
	id: string;
	listItems: IListItems[];
	constructor(dragableList: IDragableList) {
		this.id = dragableList.id;
		this.listItems = dragableList.listItems;
	}

	private initDragula(containers){
		let dragula = Dragula(containers, {});
		dragula.on('drop', function(element, container) {

		});
	}

	private addListener(thisInstance: any){
		document.addEventListener('DOMContentLoaded', function() {
			let containers = [document.getElementById(thisInstance.id)];
			thisInstance.initDragula(containers);
		}, false);
	}

	private createListElements(listItems){
		let listItemElements: string = "";
		for (let listItem of listItems){
			let listItemContent: string = listItem.content !== undefined ? listItem.content : '';
			listItemElements += `<div class='${Style.listItem}'>${listItemContent}</div>`;
		}
		return listItemElements;
	}

	public createModuleElement() {
		this.addListener(this);
		let listElements: string = this.createListElements(this.listItems);

		return `<div id='${this.id}' class='${Style.dragableList}'>${listElements}</div>`;
	}
}

export interface IListItems{
	content: string;
}

export interface IDragableList{
	id: string;
	listItems: IListItems[];
}

export function getModule(dragableList: IDragableList){
	return new DragableList(dragableList).createModuleElement();
}
