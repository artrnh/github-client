import { put } from 'redux-saga/effects';
import axios from 'axios';

import buildUrl from '../../utils/urlHelpers';
import {
  saveRepos,
  fetchReposFail,
  saveMoreRepos,
  fetchMoreReposFail,
} from '../actions/search';

export function* searchSaga(action) {
  try {
    const { query, filters } = action.payload;
    const url = buildUrl(query, filters);
    const res = yield axios.get(url);
    yield put(saveRepos(res.data));
  } catch (err) {
    yield put(fetchReposFail(err));
  }
}

export function* searchNextPageSaga(action) {
  try {
    const { query, filters, page } = action.payload;
    const url = buildUrl(query, filters, page);
    const res = yield axios.get(url);
    yield put(saveMoreRepos(res.data));
  } catch (err) {
    yield put(fetchMoreReposFail(err));
  }
}
