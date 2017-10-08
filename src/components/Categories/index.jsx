import React from 'react';
import { inject } from 'mobx-react'
import UserInput from '../UserInput/index';
import CategoryList from '../CategoryList/index';
import './index.css';


const Categories = ({ mode, onMove, selectedCategory, store }) => (
  <div className="categories">
    { (mode === "edit") &&
      <div className="category-input">
        <UserInput
          value="Add"
          placeholder="Enter category title"
          onSubmit={store.createCategory} />
      </div>
    }
    <CategoryList
      parent={null}
      mode={mode}
      selectedCategory={selectedCategory}
      onMove={onMove} />
  </div>
);

export default inject('store')(Categories);