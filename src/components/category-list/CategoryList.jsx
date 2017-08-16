import React, { Component } from 'react';
import './CategoryList.css';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = { newTitle: '' };
  }

  handleClick = (id) => {
    this.props.categorySelect(id);
  }

  handleAddInputChange = (event) => {
    this.setState({ newTitle: event.target.value });
  }

  handleAddInputSubmit = (event) => {
    event.preventDefault();
    const newTitle = this.state.newTitle;
    if (newTitle) {
      this.props.addCategory(newTitle);
      this.setState({ newTitle: '' })
    }
  }

  render() {
    const list = this.props.list.map((category) =>
      <li className="category_list-item" key={category.id}>
        <div className="category_list-item__container">
          <button className="category_list-item__down" type="button"><i className="fa fa-angle-down" aria-hidden="true"></i></button>
          <a className="category_list-item__title" onClick={this.handleClick.bind(this, category.id)}>{category.title}</a>
          <button className="category_list-item__edit" type="button"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        </div>
        <div className="category_list-item__container">
          <button className="category_list-item__delete" type="button"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
          <button className="category_list-item__add" type="button"><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
        {/* {category.children.length > 0 && <CategoryList list={category.children} categoryClick={this.handleClick} />} */}
      </li>
    );
    return (
      <div>
        <form 
          className="category_add-item"
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
        <ul className="category_list">{ list }</ul>
      </div>
    );
  }
}