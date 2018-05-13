import { createStore, combineReducers, compose } from 'redux';

import search from './reducers/search';
import filters from './reducers/filters';

const reducer = combineReducers({
  search,
  filters,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(reducer, composeEnhancers());
