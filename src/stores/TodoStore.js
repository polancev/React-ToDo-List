// import { observable, autorun } from 'mobx';
import uuid from 'uuid';

export class TodoStore {
	constructor() {
		this.loadTodos();
	}

	loadTodos() {
		this.todos = [];
	}

	createTodo(title, category) {
		this.todos.push(new Todo(title, category));
	}

	getTodos(id) {
		console.log(this.todos)
		return this.todos.filter(todo => todo.category === id);
	}

	checkTodo(id) {
		const index = this.findIndex(id);
    if (index !== -1) {
      this.todos[index].checked = !this.todos[index].checked;
    }

	}

	findIndex(id) {
    return this.todos.findIndex(todo => todo.id === id);
  }

}

export class Todo {
	constructor(title, category, id = uuid.v4()) {
		this.id = id;
    this.title = title;
		this.timestomp = Date.now();
    this.category	= category;
    this.checked = false;
  }
}

export const todoStoreInstance = new TodoStore();
