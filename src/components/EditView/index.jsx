import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../Header/index';
import Categories from '../Categories/index';
import EditTodo from '../EditTodo/index';



class EditView extends Component {
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
    return props.store.getTodo(todoId);
  }

  onChange = (event) => {
    const { value, name } = event.target;
    const { todo } = this.state;
    const newTodo = { ...todo, [name]: value  };

    this.setState({ todo: newTodo });
  };

  onCheck = () => {
    const { todo } = this.state;
    const done = !todo.done;
    const newTodo = { ...todo, done  };

    this.setState({ todo: newTodo });
  };

  closeTodo = (needSave, newTodo) => {
    if (needSave) {
      this.props.store.updateTodo(newTodo);
    }
    this.props.history.goBack();
  };

  onMove = (category) => {
    const { todo } = this.state;
    const newTodo = { ...todo, category  };

    this.setState({ todo: newTodo });
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
              selectedCategory={todo.category}
              onMove={this.onMove} />
          </div>
          <div className="right-panel">
            <EditTodo
              todo={todo}
              closeTodo={this.closeTodo}
              onChange={this.onChange}
              onCheck={this.onCheck}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default inject('store')(observer(EditView));
