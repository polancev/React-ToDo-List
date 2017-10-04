import React from 'react';
import { Link } from "react-router-dom";

import {
  CheckedBox,
  EditButton,
  UncheckedBox
} from '../Buttons/index';

import './index.css';

const TodoItem = ({ todo, onCheck }) => {
  const { id, title, checked } = todo;

  return (
    <div className="todo">
      <div className="todo__wrapper">
        {checked
          ? <UncheckedBox onClick={onCheck} />
          : <CheckedBox onClick={onCheck} />
        }
        <div className="todo__title">{title}</div>
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
