import React from 'react';
import { Link } from 'react-router-dom';
import { AddButton, AngleDownButton, AngleUpButton, DeleteButton, EditButton } from '../Buttons/index';
import './index.css';

const Category = ({
  category,
  selected,
  hasChildren,
  onToggle,
  onCategorySelect,
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
      <Link to={`/todos/${id}`} className="category__title">
        {/* <a  onClick={onCategorySelect}>{title}</a> */}
        {title}
      </Link>
      <EditButton onClick={onEdit}/>
      <DeleteButton onClick={onDelete}/>
      <AddButton onClick={onAddSub}/>
    </div>
  );
}

export default Category;
