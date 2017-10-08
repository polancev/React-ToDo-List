import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/index';
import Store from './stores/Store';

import 'font-awesome/css/font-awesome.css';
import './index.css';

ReactDOM.render(
    <App store={new Store()} />, 
    document.getElementById('root')
);
registerServiceWorker();
