import React, { Component } from 'react';
import './App.css';

import Category from './components/Category';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id    : 1,
          name  : 'Category 1',
          todoes: [
            {
              id: 1,
              title: 'To-Do Item #1',
              description: '',
              done: true
            },
            {
              id: 2,
              title: 'To-Do Item #2',
              description: '',
              done: true
            }
          ]
        },
        
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h2>To-Do List</h2>
        <div className="todo">
          <div className="todo__category">
            <Category></Category>
          </div>
          <div className="todo__tasklist">
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
