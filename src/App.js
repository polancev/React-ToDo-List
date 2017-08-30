import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import CategoryList from './components/category-list/CategoryList';
import CategoryInput from './components/category-list/CategoryInput';
import TaskList from './components/task-list/TaskList';
import { TodoStore } from './stores/TodoStore';
import { CategoryStore } from './stores/CategoryStore';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.categoryStore = new CategoryStore();
    this.todoStore     = new TodoStore();
    
    const categories = this.categoryStore.getCategories();
    const todos = [];

    this.state = { categories, todos, selectedCategoty: null };
  }

  handleSelectCategory = id => {
    this.setState({ selectedCategory: id});
    // const todoes = this.todoStore.getTodos(id);
    // this.setState({ tasks, selectedCategoty: categoryId });
  }

  handleAddCategory = title => {
    this.categoryStore.createCategory(title);
    const categories = this.categoryStore.getCategories();
    this.setState({ categories });
  }
  
  handleAddSubCategory = parent => {
    const title = prompt('Enter category name');
    if (title) {
      this.categoryStore.createCategory(title, parent);
      this.categoryStore.toggleCategory(parent, true);
      const categories = this.categoryStore.getCategories();
      this.setState({ categories });
    }
  }

  handleEditCategory = () => {

  }

  handleDeleteCategory = id => {
    this.categoryStore.deleteCategory(id);
    const categories = this.categoryStore.getCategories();
    this.setState({ categories });
  }

  handleOnToggle = id => {
    this.categoryStore.toggleCategory(id);
    const categories = this.categoryStore.getCategories();
    this.setState({ categories });
  }

  render() {
    return (
      <div className="app">
        <h2>To-Do List</h2>
        <div className="todo">
          <div className="todo__category">
            <CategoryInput addCategory={this.handleAddCategory}  />
            <CategoryList 
              list={this.state.categories}
              parent={null}
              selectedCategory={this.state.selectedCategory}
              onToggle={this.handleOnToggle}
              selectCategory={this.handleSelectCategory}
              addSubCategory={this.handleAddSubCategory}
              deleteCategory={this.handleDeleteCategory} 
              editCategory={this.handleEditCategory} />
          </div>
          <div className="todo__tasklist">
            <TaskList list={this.state.todos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
