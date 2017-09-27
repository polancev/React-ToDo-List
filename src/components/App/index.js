import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import HomeView from '../HomeView/index';
import ListView from '../ListView/index';
import EditView from '../EditView/index';

import { todoStoreInstance } from '../../stores/TodoStore';
import { categoryStoreInstance } from '../../stores/CategoryStore';

class App extends Component {
  constructor(props) {
    super(props);
    // !tempary
    categoryStoreInstance.createCategory('Categoty 1', null);
    const id2 = categoryStoreInstance.createCategory('Categoty 2', null);
    const id3 = categoryStoreInstance.createCategory('Categoty 3', null);
    categoryStoreInstance.createCategory('Categoty 3 1', id3);
    categoryStoreInstance.createCategory('Categoty 3 2', id3);
    categoryStoreInstance.toggleCategory(id3, true);

    todoStoreInstance.createTodo('To-Do Item #1', id2);
    todoStoreInstance.createTodo('To-Do Item #2', id2);
    todoStoreInstance.createTodo('To-Do Item #3', id2);
    // -------
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/todos/:category" render={(props) => {
              <ListView {...props}/>
            }} />
            <Route path="/edit/:todo" component={EditView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
