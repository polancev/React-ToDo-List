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

    // const categories = [{
    //     id: '1',
    //     title: 'Category 1',
    //     children: []
    //   }, {
    //     id: '2',
    //     title: 'Category 2',
    //     children: [{
    //       id: '2/1',
    //       title: 'Category 2 1',
    //       children: []
    //     }, {
    //       id: '2/2',
    //       title: 'Category 2 2',
    //       children: []
    //     }
    //     ]
    // }];

    // const todoes = [{
    //     id: 1,
    //     title: 'To-Do Item #1',
    //     category: '1',
    //     description: '',
    //     done: true
    //   }, {
    //     id: 2,
    //     title: 'To-Do Item #2',
    //     category: '1',
    //     description: '',
    //     done: true
    //   }];

    // this.todoStore = new TodoStore();
    // const todoes = this.todoStore.getTodos();
    
    this.categoryStore = new CategoryStore();
    this.todoStore     = new TodoStore();
    
    const categories = this.categoryStore.getCategories();
    const todos = [];

    this.state = { categories, todos, selectedCategoty: null };

  }

  handleCategorySelect = (categoryId) => {
    const tasks = this.state.todos.filter((todo) => todo.category === categoryId);
    this.setState({ tasks, selectedCategoty: categoryId });
  }

  handleAddCategory = (title) => {
    this.categoryStore.createCategory(title);
    const task = [];
    const categories = this.categoryStore.getCategories();
    this.setState({ categories, task });
  }

  render() {
    return (
      <div className="app">
        <h2>To-Do List</h2>
        <div className="todo">
          <div className="todo__category">
            <CategoryList 
              list={this.state.categories}
              categorySelect={this.handleCategorySelect}
              addCategory={this.handleAddCategory} />
          </div>
          <div className="todo__tasklist">
            <TaskList 
              list={this.state.todos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
