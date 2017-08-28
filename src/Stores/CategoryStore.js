// import { observable, autorun } from 'mobx';
import uuid from 'uuid';

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

	createCategory(title, parent = null) {
		this.categories.push(new Category(title, parent));
	}

	deleteCategory(id) {
		const index = this.categories.findIndex((value, index, arr) => value.id === id);
		if (index !== -1) {
			this.categories.splice(index, 1);
		}
		return this.categories;
	}
}

export class Category {
	id = null;
	title = '';
	parent;

	constructor(title, parent) {
		// this.id = uuid.v4();
		this.id = Date.now();
		this.title = title;
		this.parent = parent;
	}
}