import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import registerServiceWorker from './utils/registerServiceWorker';
import App from './App';

import search from './store/reducers/search';
import filters from './store/reducers/filters';
import repositories from './store/reducers/repositories';
import watchSearch from './store/sagas';

injectGlobal`
  body {
    height: auto;
  }
`;

const reducer = combineReducers({
  search,
  filters,
  repositories,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchSearch);

const app = (
  <Provider store={store}>
    <BrowserRouter basename="/github-client/">
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
