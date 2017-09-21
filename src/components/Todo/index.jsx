import React from 'react';
import { CheckedBox } from '../Buttons/index';
import './index.css';

const Todo = ({ title, onClick }) =>
<div className="todo">
  <CheckedBox onClick={onClick} />
  {title}
</div>

export default Todo;
