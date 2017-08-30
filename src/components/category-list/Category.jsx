import React, { Component } from 'react';
import './Category.css';

export default class Category extends Component {
  render() {
    const title = this.props.title;
    const toggleIconClass = this.props.opened ? "fa fa-angle-up" : "fa fa-angle-down";
    const categoryClass = this.props.selected ? "category selected" : "category";
    return (
      <div className={categoryClass}>
        {this.props.hasChildren &&
          <button className="category__down" type="button"
            onClick={this.props.onToggle}>
            <i className={toggleIconClass} aria-hidden="true"></i>
          </button>
        }
        <a className="category__title" onClick={this.props.onSelect}>{title}</a>
        <button className="category__edit" type="button"
          onClick={this.props.onEdit}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button className="category__delete" type="button"
          onClick={this.props.onDelete}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>
        <button className="category__add" type="button"
          onClick={this.props.onAddSub}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
