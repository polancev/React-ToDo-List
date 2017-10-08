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
    <div className={selected ? "category selected" : "category"}>
      <div className="category__wrapper">
        {hasChildren && (opened
          ? <AngleUpButton onClick={onToggle}/>
          : <AngleDownButton onClick={onToggle}/>)
        }
        <Link to={`/todos/${id}`} className="category__title">{title}</Link>
        <EditButton onClick={onEdit}/>
      </div>
      <div className="category__wrapper">
        <DeleteButton onClick={onDelete}/>
        <AddButton onClick={onAddSub}/>
      </div>
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
  const { title, opened } = category;
  return (
    <div className={selected ? "category selected" : "category"}>
      <div className="category__wrapper">
        {hasChildren && (opened
          ? <AngleUpButton onClick={onToggle}/>
          : <AngleDownButton onClick={onToggle}/>)
        }
        <div className="category__title">{title}</div>
      </div>
      <div className="category__wrapper">
        <MoveButton onClick={onMove}/>
      </div>
    </div>
  );
}

export {
  CategoryItem,
  CategoryMove
};
