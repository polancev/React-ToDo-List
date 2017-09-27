import React from 'react';
import Category from '../Category/index';
import './index.css';

const sortFunction = (a, b) => {
  if (a.timestomp > b.timestomp) {
    return -1;
  }
  if (a.timestomp < b.timestomp) {
    return 1;
  }
  return 0;
};

const CategoryList = ({
  list,
  parent,
  selectedCategory,
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
          .map(category => {
            const { id, title, opened } = category;
            const hasChildren = list.findIndex(value => value.parent && value.parent === id) > -1;
            return (
              <li key={id} className="category_list-item">
                <Category
                  category={category}
                  hasChildren={hasChildren}
                  selected={selectedCategory === id}
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
            );
          })
      }
    </ul>

export default CategoryList;
