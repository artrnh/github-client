import { createStore, combineReducers, compose } from 'redux';

import search from './reducers/search';

const reducer = combineReducers({
  search,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(reducer, composeEnhancers());
