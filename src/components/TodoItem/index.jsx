import React from 'react';
import { Link } from "react-router-dom";

import {
  CheckedBox,
  EditButton,
  UncheckedBox
} from '../Buttons/index';

import './index.css';

const TodoItem = ({ todo, onCheck, done }) => {
  const { id, title } = todo;
  
  return (
    <div className="todo">
      <div className="todo__wrapper">
        { !done
          ? <UncheckedBox onClick={onCheck} />
          : <CheckedBox onClick={onCheck} />
        }
        <div className={done ? "todo__title done" : "todo__title"}>{title}</div>
      </div>
      <div className="todo__wrapper">
        <Link to={`/edit/${id}`}>
          <EditButton />
        </Link>
      </div>
    </div>
  );
};

export default TodoItem;
