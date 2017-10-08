import { extendObservable, computed } from 'mobx';
import Category from '../models/CategoryModel';
import Todo from '../models/TodoModel';


export default class Store {
  constructor() {
    extendObservable(this, {
      categories: [],
      todos: []
    });
    
    this.fillStore();
  }

  fillStore() {
    const id3 = this.createCategory('Category 3', null);
    this.createCategory('Category 3 2', id3);
    setTimeout(() => {
      this.createCategory('Category 3 1', id3);
    }, 1);
    this.toggleCategory(id3, true);
    
    setTimeout(() => {
      const id2 = this.createCategory('Category 2', null);
      this.createTodo('To-Do Item #1', id2);
      this.createTodo('To-Do Item #2', id2);
      this.createTodo('To-Do Item #3', id2);
      
      setTimeout(() => {
        this.createCategory('Category 1', null);
      }, 2);
    }, 1);

  }

  // Categories
  createCategory = (title, parent = null) => {
    const newCategory = new Category(title, parent);
    this.categories.push(newCategory);
    return newCategory.id;
  }

  deleteCategory = (id) => {
    // todo: delete subcategories && ask user
    const index = findIndex(this.categories, id);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }

  updateCategory = (id, title) => {
    const index = findIndex(this.categories, id);
    if (index !== -1) {
      this.categories[index].title = title;
    }
  }

  toggleCategory = (id, opened) => {
    const index = findIndex(this.categories, id);
    if (index !== -1) {
      this.categories[index].opened =
        opened
          ? opened
          : !this.categories[index].opened;
    }
  }

  // Todos
  createTodo = (title, category) => {
    this.todos.push(new Todo(title, category));
  }

  getTodo = (id) => {
    return this.todos.find(todo => todo.id === id);
  }

  updateTodo = (newTodo) => {
    const { id } = newTodo;
    const index = findIndex(this.todos, id);
    if (index !== -1) {
      this.todos[index] = newTodo;
    }
  }

  checkTodo = (id) => {
    const index = findIndex(this.todos, id);
    if (index !== -1) {
      this.todos[index].done = !this.todos[index].done;
    }
  }
}

function findIndex(array, id) {
  return array.findIndex(element => element.id === id);
}
