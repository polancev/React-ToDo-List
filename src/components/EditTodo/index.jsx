import React, { Component } from 'react';

import {
  Button,
  CheckedBox,
  UncheckedBox
} from '../Buttons/index';

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
    const { todo } = this.state;
    const newTodo = { ...todo, [name]: value  };

    this.setState({ todo: newTodo });
  }

  onCheck = () => {
    const { todo } = this.state;
    const checked = !todo.checked;
    const newTodo = { ...todo, checked  };

    this.setState({ todo: newTodo });
  }

  render() {
    const { todo } = this.state;
    const { closeTodo } = this.props;

    if (!todo) { return null; }
    const { title, checked, description } = todo;
    return (
      <div className="edit-todo">
        <div className="edit-todo__buttons">
          <Button className="simple bordered" onClick={() => closeTodo(true, todo)}>Save changes</Button>
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
          {checked
            ? <UncheckedBox onClick={this.onCheck} />
            : <CheckedBox onClick={this.onCheck} />
          }
          <span>Done</span>
        </div>
        <div className="edit-todo__description">
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.onChange}/>
        </div>
      </div>
    );
  }
}
