import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './utils/registerServiceWorker';

import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

const app = (
  <Provider store={store}>
    <BrowserRouter basename="/github-client/">
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
