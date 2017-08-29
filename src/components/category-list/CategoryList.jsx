import React, { Component } from 'react';
import CategoryInput from './CategoryInput';
import Category from './Category';

import './CategoryList.css';

export default class CategoryList extends Component {
  render() {
    const list = this.props.list.sort((a, b) => {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return 1;
      return 0;
    }).map((category) =>
      <li className="category_list-item" key={category.id}>
        <Category 
          title={category.title}
          onAddClick={this.props.addSubCategory.bind(this, category.id)}
          onSelect={this.props.selectCategory.bind(this, category.id)} 
          onDelete={this.props.deleteCategory.bind(this, category.id)} />
        {/* {category.children.length > 0 && <CategoryList list={category.children} categoryClick={this.handleClick} />} */}
      </li>
    );
    return (
      <div>
        <CategoryInput addCategory={this.props.addCategory}  />
        <ul className="category_list">{ list }</ul>
      </div>
    );
  }
}