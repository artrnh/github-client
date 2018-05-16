import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionsTypes';
import { searchSaga } from './search';

export function* watchSearch() {
  yield takeEvery(actionTypes.FETCH_REPOS_INIT, searchSaga);
}
