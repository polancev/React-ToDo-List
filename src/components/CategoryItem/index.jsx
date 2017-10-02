import React from 'react';
import { Link } from 'react-router-dom';
import {
  AddButton,
  AngleDownButton,
  AngleUpButton,
  DeleteButton,
  EditButton,
  MoveButton
} from '../Buttons/index';
import './index.css';

const CategoryItem = ({
  category,
  selected,
  hasChildren,
  onToggle,
  onEdit,
  onDelete,
  onAddSub
}) => {
  const { id, title, opened } = category;
  return (
    <div className={selected
      ? "category selected"
      : "category"}>
      {hasChildren && (opened
        ? <AngleUpButton onClick={onToggle}/>
        : <AngleDownButton onClick={onToggle}/>)
      }
      <Link to={`/todos/${id}`} className="category__title">{title}</Link>
      <EditButton onClick={onEdit}/>
      <DeleteButton onClick={onDelete}/>
      <AddButton onClick={onAddSub}/>
    </div>
  );
}

const CategoryMove = ({
  category,
  selected,
  hasChildren,
  onToggle,
  onMove
}) => {
  const { id, title, opened } = category;
  return (
    <div className={selected
      ? "category selected"
      : "category"}>
      {hasChildren && (opened
        ? <AngleUpButton onClick={onToggle}/>
        : <AngleDownButton onClick={onToggle}/>)
      }
      <Link to={`/todos/${id}`} className="category__title">{title}</Link>
      <MoveButton onClick={onMove}/>
    </div>
  );
}

export {
  CategoryItem,
  CategoryMove
};
