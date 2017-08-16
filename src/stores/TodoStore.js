// import { observable, autorun } from 'mobx';
import uuid from 'uuid';

export class TodoStore {
	todoes = [];
	isLoading = false;

	constructor() {
		this.loadTodos();
	}

	loadTodos() {
		// this.isLoading = true;
		// fetch('./Stores/todos.json').then(response => {
		// 	console.log(response.json());
		// 	// response.json()
		// }); //.then(todoes => {console.log(todoes)});
		this.createTodo('To-Do Item #1');
		this.createTodo('To-Do Item #2');
		this.createTodo('To-Do Item #3');
	}

	createTodo(title) {
		this.todoes.push(new Todo(title));
	}

	getTodos() {
		return this.todoes;
	}
}

export class Todo {
	id = null;
	title = '';
	description = '';
	completed = false;

	constructor(title, category, id = uuid.v4()) {
		this.id			= id;
		this.title		= title;
		this.category	= category;
	}
}