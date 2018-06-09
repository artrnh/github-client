import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import registerServiceWorker from './utils/registerServiceWorker';
import App from './App';
import rootReducer from './store/reducers';
import rootSaga from './store/sagas';

injectGlobal`
  body {
    height: auto;
  }
`;

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

const app = (
  <Provider store={store}>
    <BrowserRouter basename="/github-client/">
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
