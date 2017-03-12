"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtomSelectList = require("../../00-atoms/form-elements/select-list");
const Style = require("../../../../src/modules/01-molecules/form-elements/select-list.scss");
class SelectList extends AtomSelectList.SelectList {
    constructor(selectList) {
        super({ id: selectList.id, name: selectList.name });
        if (selectList.searchable !== undefined)
            super.searchable = selectList.searchable;
        if (selectList.type !== undefined)
            super.type = selectList.type;
        if (selectList.value !== undefined)
            super.value = selectList.value;
        if (selectList.placeholder !== undefined)
            super.placeholder = selectList.placeholder;
        if (selectList.label !== undefined)
            this.label = selectList.label;
        if (selectList.options !== undefined)
            this.options = selectList.options;
    }
    createModuleElement() {
        let selectList = {
            id: this.id,
            name: this.name,
            searchable: this.searchable,
            type: this.type,
            value: this.value,
            placeholder: this.placeholder,
            options: this.options
        };
        if (this.label !== undefined)
            selectList.labelElement = `<label for="${this.id}" class="${Style.label}">${this.label}</label>`;
        return `
			<div class="${Style.inputGroup}">
				${AtomSelectList.getModule(selectList)}
			</div>
		`;
    }
}
exports.SelectList = SelectList;
function getModule(selectList) {
    return new SelectList(selectList).createModuleElement();
}
exports.getModule = getModule;