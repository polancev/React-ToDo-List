import { observable, autorun } from 'mobx';

export default class TodoStore {
	@observable todoes = [];

	addTodo(task, category) {
		this.todoes.push({
			id: 1,
			title: 'To-Do Item #1',
			category: '1',
			description: '',
			done: true
		});
	}
}