import React from 'react';
import { CheckedBox, EditButton, UncheckedBox } from '../Buttons/index';
import './index.css';

const Todo = ({ title, checked, onCheck, onEdit }) =>
<div className="todo">
  <div className="title-wrapper">
    {!checked
      ? <CheckedBox onClick={onCheck} />
      : <UncheckedBox onClick={onCheck} />
    }
    <span className="title">{title}</span>
  </div>
  <EditButton onClick={onEdit} />
</div>

export default Todo;
