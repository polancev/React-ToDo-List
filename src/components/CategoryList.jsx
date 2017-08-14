import React, { Component } from 'react';
import './CategoryList.css';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {newTitle: ''};
  }

  handleClick = (id) => {
    this.props.categorySelect(id);
  }

  handleAddInputChange = (event) => {
    this.setState({newTitle: event.target.value});
  }

  handleAddInputSubmit = (event) => {
    event.preventDefault();
    this.props.addCategory(this.state.newTitle);
  }

  render() {
    const list = this.props.list.map((category) =>
      <li key={category.id}>
        <a onClick={this.handleClick.bind(this, category.id)}>{category.title}</a>
        {/* {category.children.length > 0 && <CategoryList list={category.children} categoryClick={this.handleClick} />} */}
      </li>
    );
    return (
      <div>
        <form 
          className="category__add"
          onSubmit={this.handleAddInputSubmit} >
          <input 
            type="text" 
            placeholder="Enter category title"
            onChange={this.handleAddInputChange}
            value={this.state.newTitle} />
          <input 
            type="submit" 
            value="Add" />
        </form>
        <ul>{ list }</ul>
      </div>
    );
  }
}