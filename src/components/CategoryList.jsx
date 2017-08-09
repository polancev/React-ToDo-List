import React, { Component } from 'react';
import './CategoryList.css';

export default class CategoryList extends Component {

  handleClick = (id) => {
    this.props.categoryClick(id);
  }

  render() {
    const list = this.props.list.map((category) =>
      <li key={category.id}>
        <a onClick={this.handleClick.bind(this, category.id)}>{category.title}</a>
        {category.children.length > 0 && <CategoryList list={category.children} categoryClick={this.handleClick} />}
      </li>
    );
    return (
      <ul>{list}</ul>
    );
  }
}