import React, { Component } from 'react';
import Todos from '../Todos/index';
import Categories from '../Categories/index';

const ListView = ({ match }) => {
  return (
    <div className="app">
      <h2>To-Do List</h2>
      <h3>{match.params.category}</h3>
      <div className="main">
        <div className="left-panel">
          {/* <Categories /> */}
        </div>
        <div className="right-panel">
          {/* <Todos /> */}
        </div>
      </div>
    </div>
  );
}


export default ListView;
