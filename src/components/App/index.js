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

    // !tempary
    this.categoryStore.createCategory('Categoty 1', null);
    const id2 = this.categoryStore.createCategory('Categoty 2', null);
    const id3 = this.categoryStore.createCategory('Categoty 3', null);
    this.categoryStore.createCategory('Categoty 3 1', id3);
    this.categoryStore.createCategory('Categoty 3 2', id3);
    this.categoryStore.toggleCategory(id3, true);
    this.todoStore.createTodo('To-Do Item #1', id2);
    this.todoStore.createTodo('To-Do Item #2', id2);
    this.todoStore.createTodo('To-Do Item #3', id2);
    // -------

    const categories = this.categoryStore.getCategories();
    const todos = this.todoStore.getTodos(id2); // !tempary const todos = [];

    this.state = {
      categories,
      todos,
      selectedCategory: id2 // !tempary null
    };
  }

  selectCategory = id => {
    const todos = this.todoStore.getTodos(id);
    this.setState({ todos, selectedCategory: id });
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
    console.log('addTodo');
  }

  editTodo = (id) => {
    console.log('editTodo');
  }

  checkTodo = (id) => {
    this.todoStore.checkTodo(id);
    const { selectedCategory } = this.state;
    const todos = this.todoStore.getTodos(selectedCategory);
    this.setState({ todos });
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
              onCheck={this.checkTodo}
              onEdit={this.editTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
