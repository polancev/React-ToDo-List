import React, { Component } from 'react';
import UserInput from '../UserInput/index';
import TodoList from '../TodoList/index';
import { todoStoreInstance } from '../../stores/TodoStore';

export default class Todos extends Component {

  constructor(props) {
    super(props);

    const { selectedCategory } = props.match;
    const todos = todoStoreInstance.getTodos(selectedCategory);

    this.state = {
      todos,
      selectedCategory
    };
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
    return (
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
    );
  }

}
