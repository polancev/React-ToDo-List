import React, { Component } from 'react';

import Category from './Category';
import './CategoryList.css';

export default class CategoryList extends Component {
  render() {
    const selectedCategory = this.props.selectedCategory;
    const parent = this.props.parent;
    const list = this.props.list
      .filter(category => category.parent === parent)
      .sort((a, b) => {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      })
      .map(category => {
        let hasChildren = this.props.list.findIndex(value => value.parent && value.parent === category.id) > -1;
        return (<div key={category.id}>
          <li className="category_list-item">
            <Category 
              title={category.title}
              hasChildren={hasChildren}
              selected={selectedCategory === category.id}
              onToggle={this.props.onToggle.bind(this, category.id)}
              onAddSub={this.props.addSubCategory.bind(this, category.id)}
              onSelect={this.props.selectCategory.bind(this, category.id)}
              onDelete={this.props.deleteCategory.bind(this, category.id)}
              onEdit={this.props.editCategory.bind(this, category.id)} />
          </li>
          {category.opened && 
            <CategoryList
              list={this.props.list}
              parent={category.id}
              selectedCategory={selectedCategory}
              onToggle={this.props.onToggle}
              selectCategory={this.props.selectCategory}
              addSubCategory={this.props.addSubCategory}
              deleteCategory={this.props.deleteCategory}
              editCategory={this.props.editCategory} />
          }
        </div>
      )});
    return (
      <ul className="category_list">{list}</ul>
    );
  }
}