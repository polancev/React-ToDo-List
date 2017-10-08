import React from 'react';
import Categories from '../Categories/index';

const HomeView = (props) => {
  return (
    <div className="container">
      <div className="center">
        <h2>To-Do List</h2>
        <Categories mode="edit" />
      </div>
    </div>
  );
}

export default HomeView;
