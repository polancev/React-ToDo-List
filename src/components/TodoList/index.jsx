import React from 'react';
import { inject, observer } from 'mobx-react';
import TodoItem from '../TodoItem/index';
import { sortFunction } from '../../utils';
import './index.css';

const TodoList = ({ store, selectedCategory }) => {
  const todos = store.todos
    .filter(todo => todo.category === selectedCategory)
    .sort(sortFunction);

  return (
    <div>
      <ul className="todo-list">
        { todos.map(todo => {
            const { id } = todo;
            
            return (
              <li key={id} className="todo-list__item">
                <TodoItem
                  todo={todo}
                  done={todo.done}
                  onCheck={() => store.checkTodo(id)} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default inject('store')(observer(TodoList));
