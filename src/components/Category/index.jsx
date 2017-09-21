import React from 'react';
import './index.css';
import {AddButton, AngleDownButton, AngleUpButton, DeleteButton, EditButton} from '../Buttons/index';

const Category = ({
  title,
  opened,
  selected,
  hasChildren,
  onToggle,
  onCategorySelect,
  onEdit,
  onDelete,
  onAddSub
}) => <div className={selected
  ? "category selected"
  : "category"}>
  {hasChildren && (opened
    ? <AngleUpButton onClick={onToggle}/>
    : <AngleDownButton onClick={onToggle}/>)
}
  <a className="category__title" onClick={onCategorySelect}>{title}</a>
  <EditButton onClick={onEdit}/>
  <DeleteButton onClick={onDelete}/>
  <AddButton onClick={onAddSub}/>
</div>

export default Category;
