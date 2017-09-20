import React from 'react';
import './index.css';
import Button from '../Button/index';

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
}) =>
    <div className={selected ? "category selected" : "category"}>
      { hasChildren &&
        <Button
          className="category__down"
          onClick={onToggle} >
          <i className={opened ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i>
        </Button>
      }
      <a className="category__title" onClick={onCategorySelect}>{title}</a>
      <Button
        className="category__edit"
        onClick={onEdit} >
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </Button>
      <Button
        className="category__delete"
        onClick={onDelete} >
        <i className="fa fa-trash-o" aria-hidden="true" />
      </Button>
      <Button
        className="category__add"
        onClick={onAddSub} >
        <i className="fa fa-plus" aria-hidden="true"></i>
      </Button>
    </div>

export default Category;
