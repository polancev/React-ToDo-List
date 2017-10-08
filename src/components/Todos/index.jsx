import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import UserInput from '../UserInput/index';
import TodoList from '../TodoList/index';
import './index.css';


class Todos extends Component {
  addTodo = (title) => {
    const { store, selectedCategory } = this.props;
    store.createTodo(title, selectedCategory);
  }

  render() {
    return (
      <div className="todos">
        <div className="todo-input">
          <UserInput
            value="Add"
            placeholder="Enter todo title"
            onSubmit={this.addTodo} />
        </div>
        <TodoList selectedCategory={this.props.selectedCategory} />
      </div>
    );
  }
}

export default inject('store')(observer(Todos));
