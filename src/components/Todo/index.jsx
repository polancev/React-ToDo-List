import React from 'react';
import { CheckedBox, UncheckedBox } from '../Buttons/index';
import './index.css';

const Todo = ({ title, checked, onClick }) =>
<div className="todo">
  {!checked
    ? <CheckedBox onClick={onClick} />
    : <UncheckedBox onClick={onClick} />
  }
  {title}
</div>

export default Todo;
