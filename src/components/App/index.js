import React, {Component} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import UserInput from '../UserInput/index';
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

  selectCategory = id => {
    // this.setState({ selectedCategory: id });
    // const todoes = this.todoStore.getTodos(id);
    const todos = [{
      id: 1,
      title: 'To-Do Item #1'
    }, {
      id: 2,
      title: 'To-Do Item #2'
    }, {
      id: 3,
      title: 'To-Do Item #3'
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

  editCategory = (id, title) => {
    const newTitle = prompt('Enter category name', title);
    if (newTitle) {
      this.categoryStore.updateCategory(id, newTitle);
      this.setState({ categories: this.categoryStore.getCategories() });
    }
  }

  deleteCategory = id => {
    this.categoryStore.deleteCategory(id);
    const categories = this.categoryStore.getCategories();
    this.setState({categories});
  }

  onToggle = id => {
    this.categoryStore.toggleCategory(id);
    const categories = this.categoryStore.getCategories();
    this.setState({categories});
  }

  addTodo = () => {

  }

  editTodo = () => {

  }

  checkTodo = (id) => {
    console.log('check');
  }

  render() {
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
              list={this.state.categories}
              parent={null}
              selectedCategory={this.state.selectedCategory}
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
              list={this.state.todos}
              onCheck={this.checkTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
