// import { observable, autorun } from 'mobx';
// import uuid from 'uuid';

export class CategoryStore {
  categories;

  constructor() {
    this.loadCategories();
  }

  loadCategories() {
    this.categories = [];
    const id = Date.now();
    // tempary
    this.createCategory('Categoty 3', null, id);
    this.createCategory('Categoty 2', null, id+1);
    this.createCategory('Categoty 1', null, id+2);
    this.createCategory('Categoty 3 2', id, id+3);
    this.createCategory('Categoty 3 1', id, id+4);
    this.toggleCategory(id, true);
    // -------
	}

  getCategories() {
    return this.categories;
  }

  createCategory(title, parent = null, id = null) {
    const newCategory = new Category(title, parent, id);
    this.categories.push(newCategory);
    return newCategory.id;
  }

  deleteCategory(id) {
    const index = this.findCategoryIndex(id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

  updateCategory(id, title) {
    const index = this.findCategoryIndex(id);
    if (index !== -1) {
      this.categories[index].title = title;
    }
  }

  toggleCategory(id, opened) {
    const index = this.findCategoryIndex(id);
    if (index !== -1) {
      this.categories[index].opened =
				opened
        ? opened
        : !this.categories[index].opened;
    }
  }

  findCategoryIndex(id) {
    return this.categories.findIndex(value => value.id === id);
  }
}

export class Category {
  constructor(title, parent = null, id = Date.now()) {
    // this.id = Date.now();
		this.id = id;
    this.title = title;
    this.parent = parent;
    this.opened = false;
  }
}
