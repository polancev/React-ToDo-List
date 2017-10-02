import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/index';
import Todos from '../Todos/index';
import Categories from '../Categories/index';

import './index.css';

const ListView = ({ match }) => {
  const { categoryId } = match.params;

  return (
    <div className="app">
      <Link to="/">
        <Header title="To-Do List" />
      </Link>
      <div className="container">
        <div className="left-panel">
          <Categories mode="edit" />
        </div>
        <div className="right-panel">
          <Todos selectedCategory={categoryId} />
        </div>
      </div>
    </div>
  );
}

export default ListView;
