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
      <div className="title-wrapper">
        {checked
          ? <UncheckedBox onClick={onCheck} />
          : <CheckedBox onClick={onCheck} />
        }
        <span className="title">{title}</span>
      </div>
      <Link to={`/edit/${id}`}>
        <EditButton />
      </Link>
    </div>
  );
}

export default TodoItem;
