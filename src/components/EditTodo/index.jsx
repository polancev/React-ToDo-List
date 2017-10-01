import React, { Component } from 'react';

import {Button} from '../Buttons/index';

import './index.css';

export default class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = { todo: props.todo };
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({ title: this.getTitle(nextProps)});
  }

  onChange = (event) => {
    const { value, name } = event.target;
    const { prevState } = this.state;
    const todo = { [name]: value, ...prevState };
    console.log(todo);
    this.setState({ todo });
  }

  render() {
    const { todo } = this.state;
    const { closeTodo } = this.props;

    if (!todo) { return null; }
    const { title, checked, description } = todo;
    return (
      <div className="edit-todo">
        <div className="edit-todo__buttons">
          <Button className="simple bordered" onClick={() => closeTodo()}>Save changes</Button>
          <Button className="simple bordered" onClick={() => closeTodo()}>Cancel</Button>
        </div>
        <div className="edit-todo__title">
          <input
            type="text"
            name="title"
            placeholder="input todo title"
            value={title}
            onChange={this.onChange} />
        </div>
        <div className="edit-todo__check">
          <input
            type="checkbox"
            name="checked"
            value={checked}
            onChange={this.onChange}
          />
        </div>
        <div className="edit-todo__description">
          <textarea
            name="description"
            value={description}
            cols="30"
            rows="10" />
        </div>
      </div>
    );
  }
}
