import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserInput from '../UserInput/index';
import CategoryList from '../CategoryList/index';
import TodoList from '../TodoList/index';

import { todoStoreInstance } from '../../stores/TodoStore';
import { categoryStoreInstance } from '../../stores/CategoryStore';

export default class ListView extends Component {
  constructor(props) {
    super(props);

    const { selectedCategory } = props.match;
    const categories = categoryStoreInstance.getCategories();
    const todos = todoStoreInstance.getTodos(selectedCategory); // !tempary const todos = [];

    this.state = {
      categories,
      todos,
      selectedCategory
    };
  }

  selectCategory = id => {
    const todos = todoStoreInstance.getTodos(id);
    this.setState({ todos, selectedCategory: id });
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

  onToggle = id => {
    categoryStoreInstance.toggleCategory(id);
    const categories = categoryStoreInstance.getCategories();
    this.setState({categories});
  }

  addTodo = () => {
    console.log('addTodo');
  }

  editTodo = (id) => {
    console.log('editTodo');
  }

  checkTodo = (id) => {
    todoStoreInstance.checkTodo(id);
    const { selectedCategory } = this.state;
    const todos = todoStoreInstance.getTodos(selectedCategory);
    this.setState({ todos });
  }

  render() {
    // const { selectedCategory } = this.props.match;
    // const categories = categoryStoreInstance.getCategories();
    // const todos = todoStoreInstance.getTodos(selectedCategory);

    const { selectedCategory, categories, todos } = this.state;
    console.log(categories);
    return (
      <div className="app">
        <h2>To-Do List</h2>
        <div className="main">
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
              onToggle={this.onToggle}
              selectCategory={this.selectCategory}
              addSubCategory={this.addCategory}
              deleteCategory={this.deleteCategory}
              editCategory={this.editCategory} />
          </div>
          <div className="todos">
            <div className="todo-input">
              <UserInput
                className="todo-input"
                value="Add"
                placeholder="Enter todo title"
                addCategory={this.addCategory} />
              </div>
            <TodoList
              list={todos}
              onCheck={this.checkTodo}
              onEdit={this.editTodo} />
          </div>
        </div>
      </div>
    );
  }
}
