import React from 'react';
import TodoItem from '../TodoItem/index';
import './index.css';

const TodoList = ({list, onCheck, onEdit}) =>
<div>
  <ul className="todo-list">
    { list.map(todo => {
      const { id } = todo;
      return (
        <li key={id} className="todo-list__item">
          <TodoItem
            todo={todo}
            onCheck={() => onCheck(id)}
            onEdit={() => onEdit(id)} />
        </li>
      );
    })}
  </ul>
</div>

export default TodoList;
