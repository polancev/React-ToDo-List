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
}

export class Category {
	id = null;
	title = '';
	parent;

	constructor(title, parent) {
		this.id = uuid.v4();
		this.title = title;
		this.parent = parent;
	}
}