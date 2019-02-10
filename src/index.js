import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';

import rootReducer from 'REDUCERS/rootReducer';
import { sagas } from 'ACTIONS/users'
import App from 'CONTAINERS/App';

import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

/*******************************************************
* Render setup
********************************************************/
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
