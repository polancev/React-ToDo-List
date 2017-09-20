import React, { Component } from 'react';
import './index.css';

export default class CategoryInput extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  handleAddInputChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleAddInputSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    if (title) {
      this.props.addCategory(title);
      this.setState({ title: '' })
    }
  }

  render() {
    return (
      <form
        className="category_add-item"
        onSubmit={this.handleAddInputSubmit} >
        <input
          type="text"
          placeholder="Enter category title"
          onChange={this.handleAddInputChange}
          value={this.state.title} />
        <input
          type="submit"
          value="Add" />
      </form>
    );
  }
}
