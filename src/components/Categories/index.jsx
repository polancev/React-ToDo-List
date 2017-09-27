import React, { Component } from 'react';
import UserInput from '../UserInput/index';
import CategoryList from '../CategoryList/index';
import { categoryStoreInstance } from '../../stores/CategoryStore';
import './index.css';

export default class Category extends Component {
  constructor(props) {
    super(props);
    const categories = categoryStoreInstance.getCategories();
    this.state = { categories };
  }

  selectCategory = id => {
    // const todos = todoStoreInstance.getTodos(id);
    // this.setState({ todos, selectedCategory: id });
  }

  addCategory = (title, parent) => {
    if (parent) {
      title = prompt('Enter category name');
      if (!title) { return; }
    }
    categoryStoreInstance.createCategory(title, parent);
    if (parent) { categoryStoreInstance.toggleCategory(parent, true); }
    this.setState({ categories: categoryStoreInstance.getCategories() });
  }

  editCategory = (id, title) => {
    const newTitle = prompt('Enter category name', title);
    if (newTitle) {
      categoryStoreInstance.updateCategory(id, newTitle);
      this.setState({ categories: categoryStoreInstance.getCategories() });
    }
  }

  deleteCategory = id => {
    categoryStoreInstance.deleteCategory(id);
    const categories = categoryStoreInstance.getCategories();
    this.setState({categories});
  }

  toggleCategory = id => {
    categoryStoreInstance.toggleCategory(id);
    const categories = categoryStoreInstance.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories, selectedCategory } = this.state;
    return (
      <div className="categories">
        <div className="category-input">
          <UserInput
            value="Add"
            placeholder="Enter category title"
            addCategory={this.addCategory} />
        </div>
        <CategoryList
          list={categories}
          parent={null}
          selectedCategory={selectedCategory}
          onToggle={this.toggleCategory}
          selectCategory={this.selectCategory}
          addSubCategory={this.addCategory}
          deleteCategory={this.deleteCategory}
          editCategory={this.editCategory} />
      </div>
    );
  }

}
