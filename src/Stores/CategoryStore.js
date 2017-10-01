// import { observable, autorun } from 'mobx';
import uuid from 'uuid';

export class CategoryStore {
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
    const id = String(this.categories.length); // tempary
    const newCategory = new Category(title, parent, id);
    this.categories.push(newCategory);
    return newCategory.id;
  }

  deleteCategory(id) {
    const index = this.findIndex(id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

  updateCategory(id, title) {
    const index = this.findIndex(id);
    if (index !== -1) {
      this.categories[index].title = title;
    }
  }

  toggleCategory(id, opened) {
    const index = this.findIndex(id);
    if (index !== -1) {
      this.categories[index].opened =
				opened
        ? opened
        : !this.categories[index].opened;
    }
  }

  findIndex(id) {
    return this.categories.findIndex(category => category.id === id);
  }
}

export class Category {
  constructor(title, parent = null, id = uuid.v4()) {
		this.id = id;
    this.title = title;
    this.timestomp = Date.now();
    this.parent = parent;
    this.opened = false;
  }
}

export const categoryStoreInstance = new CategoryStore();
