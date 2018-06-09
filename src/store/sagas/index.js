import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionsTypes';
import { fetchReposSaga, fetchMoreReposSaga } from './search';

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.FETCH_REPOS_INIT, fetchReposSaga),
    takeEvery(actionTypes.FETCH_MORE_REPOS_INIT, fetchMoreReposSaga),
  ]);
}
