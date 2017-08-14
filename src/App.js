import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';
import { TodoStore } from './Stores/TodoStore';
import { CategoryStore } from './Stores/CategoryStore';

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
    
    const categories = this.categoryStore.getCategories();
    const todos = [];

    this.state = { categories, todos };

  }

  handleCategorySelect = (categoryId) => {
    const tasks = this.state.todoes.filter((todo) => todo.category === categoryId);
    this.setState({ tasks });
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
              addCategory={this.handleAddCategory} >
            </CategoryList>
          </div>
          <div className="todo__tasklist">
            <TaskList list={this.state.todos}></TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
