import React from 'react';
import Todo from '../Todo/index';
import './index.css';

const TodoList = ({list, onCheck}) =>
<div>
  <ul className="todo-list">
    { list.map(({id, title, checked}) =>
			<li key={id} className="todo-list__item">
      	<Todo
          title={title}
          checked={checked}
          onClick={() => onCheck(id)} />
    	</li>)
		}
  </ul>
</div>

export default TodoList;
