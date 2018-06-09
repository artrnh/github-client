import { combineReducers } from 'redux';

import search from './search';
import filters from './filters';
import repositories from './repositories';

export default combineReducers({
  search,
  filters,
  repositories,
});
