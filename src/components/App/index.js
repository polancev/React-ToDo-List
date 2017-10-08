import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './index.css';

import HomeView from '../HomeView/index';
import ListView from '../ListView/index';
import EditView from '../EditView/index';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={this.props.store}>
          <Router>
            <Switch>
              <Route path="/" exact component={HomeView} />
              <Route path="/todos/:categoryId" component={ListView} />
              <Route path="/edit/:todoId" component={EditView} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
