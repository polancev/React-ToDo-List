import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import CategoryList from './components/category-list/CategoryList';
import TaskList from './components/task-list/TaskList';
import { TodoStore } from './stores/TodoStore';
import { CategoryStore } from './stores/CategoryStore';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.categoryStore = new CategoryStore();
    this.todoStore     = new TodoStore();
    
    const categories = this.categoryStore.getCategories();
    const todos = [];

    this.state = { categories, todos, selectedCategoty: null };

  }

  handleSelectCategory = (categoryId) => {
    const tasks = this.state.todos.filter((todo) => todo.category === categoryId);
    this.setState({ tasks, selectedCategoty: categoryId });
  }

  handleAddCategory = (title) => {
    this.categoryStore.createCategory(title);
    const task = [];
    const categories = this.categoryStore.getCategories();
    this.setState({ categories, task });
  }
  
  handleAddSubCategory = (id) => {
    // this.categoryStore.createCategory(title);
    // const task = [];
    // const categories = this.categoryStore.getCategories();
    // this.setState({ categories, task });
  }

  handleDeleteCategory = (id) => {
    const categories = this.categoryStore.deleteCategory(id);
    this.setState({ categories });
  }

  render() {
    return (
      <div className="app">
        <h2>To-Do List</h2>
        <div className="todo">
          <div className="todo__category">
            <CategoryList 
              list={this.state.categories}
              selectCategory={this.handleSelectCategory}
              addCategory={this.handleAddCategory} 
              addSubCategory={this.handleAddSubCategory}
              deleteCategory={this.handleDeleteCategory} />
          </div>
          <div className="todo__tasklist">
            <TaskList list={this.state.todos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
