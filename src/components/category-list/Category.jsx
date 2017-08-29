import React, { Component } from 'react';
import './Category.css';

export default class Category extends Component {
  render() {
    const title = this.props.title;
    return (
      <div className="category">
        <button 
          className="category__down" 
          type="button">
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </button>
        <a 
          className="category__title" 
          onClick={this.props.onSelect}>
          {title}
        </a>
        <button
          className="category__edit"
          type="button">
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button
          className="category__delete" 
          type="button"
          onClick={this.props.onDelete}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>
        <button
          className="category__add"
          type="button"
          onClick={this.props.onAdd}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
