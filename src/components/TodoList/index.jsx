import React, { Component } from 'react';
import Todo from '../Todo/index';
import './index.css';

const TodoList = ({ list }) =>
	<ul className="todo-list">
		{ list.map(({ id, title }) =>
			<li key={id} className="todo-list__item">
				<Todo title={title} />
			</li>)
		}
	</ul>

export default TodoList;
