// import { observable, autorun } from 'mobx';
// import uuid from 'uuid';

export class CategoryStore {
	categories;
	
	constructor() {
		this.loadCategories();
	}

	loadCategories() {
		this.categories = [];
	}

	getCategories() {
		return this.categories;
	}

	createCategory(title, parent=null) {
		this.categories.push(new Category(title, parent));
	}

	deleteCategory(id) {
		const index = this.findCategoryIndex(id);
		if (index !== -1) {
			this.categories.splice(index, 1);
		}
	}

	toggleCategory(id, opened) {
		const index = this.findCategoryIndex(id);
		if (index !== -1) {
			this.categories[index].opened = opened? opened : !this.categories[index].opened;
		}
	}

	findCategoryIndex(id) {
		return this.categories.findIndex(value => value.id === id);
	}
}

export class Category {
	constructor(title, parent=null) {
		this.id = Date.now();
		this.title = title;
		this.parent = parent;
		this.opened = false;
	}
}