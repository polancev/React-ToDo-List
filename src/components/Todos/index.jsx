import React, { Component } from 'react';

import UserInput from '../UserInput/index';
import TodoList from '../TodoList/index';

import { todoStoreInstance } from '../../stores/TodoStore';

import './index.css';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: this.getTodos(props) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ todos: this.getTodos(nextProps) });
  }

  addTodo = (title) => {
    const { selectedCategory } = this.props;
    todoStoreInstance.createTodo(title, selectedCategory);
    this.setState({ todos: this.getTodos(this.props) });
  }

  checkTodo = (id) => {
    todoStoreInstance.checkTodo(id);
    this.setState({ todos: this.getTodos(this.props) });
  }

  getTodos(props) {
    const { selectedCategory } = props;
    const todos = todoStoreInstance.getTodos(selectedCategory);
    return todos;
  }

  render() {
    return (
      <div className="todos">
        <div className="todo-input">
          <UserInput
            value="Add"
            placeholder="Enter todo title"
            addCategory={this.addTodo} />
        </div>
        <TodoList
          list={this.state.todos}
          onCheck={this.checkTodo} />
      </div>
    );
  }
}
