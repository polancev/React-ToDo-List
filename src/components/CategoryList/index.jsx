import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { CategoryItem, CategoryMove } from '../CategoryItem/index';
import { sortFunction } from '../../utils';
import './index.css';


class CategoryList extends Component {
  addCategory = (title, parent) => {
    const { store } = this.props;
    if (!title) {
      title = prompt('Enter category name');
      if (!title) { 
        return; 
      }
    }
    store.createCategory(title, parent);
    if (parent) { 
      store.toggleCategory(parent, true); 
    }
  };

  editCategory = (id, title) => {
    const newTitle = prompt('Enter category name', title);
    if (newTitle) {
      this.props.store.updateCategory(id, newTitle);
    }
  };

  render() {
    const { store, parent, mode, selectedCategory, onMove } = this.props;
    const list = store.categories.toJS();
    const children = list
    .filter(category => category.parent === parent)
    .sort(sortFunction)
    .map(category => {
      const { id, title, opened } = category;
      const hasChildren = list.findIndex(value => value.parent && value.parent === id) > -1;
      const InjectedObserverCategoryList = inject('store')(observer(CategoryList));

      return (
        <li key={id} className="category_list-item">
          { mode === 'edit'
            ? <CategoryItem
                category={category}
                hasChildren={hasChildren}
                selected={selectedCategory === id}
                onAddSub={() => this.addCategory('', id)}
                onEdit={() => this.editCategory(id, title)}
                onDelete={() => store.deleteCategory(id)}
                onToggle={() => store.toggleCategory(id)} />
            : <CategoryMove
                category={category}
                hasChildren={hasChildren}
                selected={selectedCategory === id}
                onMove={() => onMove(id)}
                onToggle={() => store.toggleCategory(id)} />
          }

          { opened &&
            <div className="embedded-list">
              <InjectedObserverCategoryList
                parent={id}
                mode={mode}
                onMove={onMove}
                selectedCategory={selectedCategory} />
            </div>
          }
        </li>
      );
    });
    
    return <ul className="category_list">{children}</ul>;
  }
}

export default inject('store')(observer(CategoryList));
