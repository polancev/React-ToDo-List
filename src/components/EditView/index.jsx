import React, { Component } from 'react';

import Header from '../Header/index';
import Categories from '../Categories/index';
import EditTodo from '../EditTodo/index';

import {todoStoreInstance} from "../../stores/TodoStore";

export default class EditView extends Component {
  constructor(props) {
    super(props);

    const todo = this.getTodo(props);
    this.state = { todo };
  }

  componentWillReceiveProps(nextProps) {
    this.state = { todo: this.getTodo(nextProps) };
  }

  getTodo(props) {
    const { todoId } = props.match.params;
    return todoStoreInstance.getTodo(todoId);
  }

  closeTodo = (needSave, newTodo) => {
    if (needSave) {
      todoStoreInstance.updateTodo(newTodo);
    }
    this.props.history.goBack();
  }

  onMove = (categoryId) => {

  }

  render() {
    const { todo } = this.state;
    if (!todo) { return null; }
    const { title } = todo;

    return (
      <div className="app">
        <Header title={title} />
        <div className="container">
          <div className="left-panel">
            <Categories
              mode="move"
              onMove={this.onMove} />
          </div>
          <div className="right-panel">
            <EditTodo
              todo={todo}
              closeTodo={this.closeTodo} />
          </div>
        </div>
      </div>
    );
  }
}
