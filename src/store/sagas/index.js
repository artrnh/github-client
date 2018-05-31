import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionsTypes';
import { searchSaga, searchNextPageSaga } from './search';

export default function* watchSearch() {
  yield takeEvery(actionTypes.FETCH_REPOS_INIT, searchSaga);
  yield takeEvery(actionTypes.FETCH_MORE_REPOS_INIT, searchNextPageSaga);
}
