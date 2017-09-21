import React from 'react';
import Category from '../Category/index';
import './index.css';

const sortFunction = (a, b) => {
  if (a.id > b.id) {
    return -1;
  }
  if (a.id < b.id) {
    return 1;
  }
  return 0;
};

const CategoryList = ({
  selectedCategory,
  parent,
  list,
  onToggle,
  selectCategory,
  addSubCategory,
  deleteCategory,
  editCategory
}) =>
  <ul className="category_list">
      { list
        .filter(category => category.parent === parent)
        .sort(sortFunction)
        .map(({ id, title, opened }) => {
          const hasChildren = list.findIndex(value => value.parent && value.parent === id) > -1;
          return (
            <li key={id} className="category_list-item">
              <Category
                title={title}
                hasChildren={hasChildren}
                selected={selectedCategory === id}
                opened={opened}
                onToggle={() => onToggle(id)}
                onAddSub={() => addSubCategory(null, id)}
                onDelete={() => deleteCategory(id)}
                onEdit={() => editCategory(id, title)}
                onCategorySelect={() => selectCategory(id)} />
                { opened &&
                  <div className="embedded-list">
                    <CategoryList
                      list={list}
                      parent={id}
                      onToggle={onToggle}
                      selectedCategory={selectedCategory}
                      selectCategory={selectCategory}
                      addSubCategory={addSubCategory}
                      deleteCategory={deleteCategory}
                      editCategory={editCategory} />
                  </div>
                }
            </li>
        )})
      }
    </ul>

export default CategoryList;
