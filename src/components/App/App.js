import React, {Component} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import CategoryInput from '../CategoryInput/index';
import CategoryList from '../CategoryList/index';
import TodoList from '../TodoList/index';

import {TodoStore} from '../../stores/TodoStore';
import {CategoryStore} from '../../stores/CategoryStore';

class App extends Component {
  constructor(props) {
    super(props);

    this.categoryStore = new CategoryStore();
    this.todoStore = new TodoStore();

    const categories = this.categoryStore.getCategories();
    const todos = [];

    this.state = {
      categories,
      todos,
      selectedCategoty: null
    };
  }

  handleSelectCategory = id => {
    // this.setState({ selectedCategory: id });
    // const todoes = this.todoStore.getTodos(id);
    const todos = [{
      title: 'To-Do Item #1'
    }, {
      title: 'To-Do Item #2'
    }];
    this.setState({ todos, selectedCategoty: id });
  }

  addCategory = (title, parent) => {
    if (parent) {
      title = prompt('Enter category name');
      if (!title) { return; }
    }
    this.categoryStore.createCategory(title, parent);
    if (parent) { this.categoryStore.toggleCategory(parent, true); }
    this.setState({ categories: this.categoryStore.getCategories() });
  }

  handleEditCategory = (id, title) => {
    const newTitle = prompt('Enter category name', title);
    if (newTitle) {
      this.categoryStore.updateCategory(id, newTitle);
      this.setState({ categories: this.categoryStore.getCategories() });
    }
  }

  handleDeleteCategory = id => {
    this.categoryStore.deleteCategory(id);
    const categories = this.categoryStore.getCategories();
    this.setState({categories});
  }

  handleOnToggle = id => {
    this.categoryStore.toggleCategory(id);
    const categories = this.categoryStore.getCategories();
    this.setState({categories});
  }

  render() {
    return (
      <div className="app">
        <h2>To-Do List</h2>
        <div className="main">
          <div className="categories">
            <CategoryInput
              addCategory={this.addCategory} />
            <CategoryList
              list={this.state.categories}
              parent={null}
              selectedCategory={this.state.selectedCategory}
              onToggle={this.handleOnToggle}
              selectCategory={this.handleSelectCategory}
              addSubCategory={this.addCategory}
              deleteCategory={this.handleDeleteCategory}
              editCategory={this.handleEditCategory} />
          </div>
          <div className="todos">
            <TodoList
              list={this.state.todos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
