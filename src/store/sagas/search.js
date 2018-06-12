import { put, call } from 'redux-saga/effects';

import searchApi from '../../api/search';
import queryParamsBuilder from '../../utils/urlHelpers';
import {
  saveRepos,
  fetchReposFail,
  saveMoreRepos,
  fetchMoreReposFail,
} from '../actions/search';

export function* fetchReposSaga(action) {
  try {
    const { query, filters } = action.payload;
    const queryParams = queryParamsBuilder(query, filters);
    const res = yield call(searchApi.searchRepos, queryParams);
    yield put(saveRepos(res.data));
  } catch (err) {
    yield put(fetchReposFail(err.response));
  }
}

export function* fetchMoreReposSaga(action) {
  try {
    const { query, filters, page } = action.payload;
    const queryParams = queryParamsBuilder(query, filters, page);
    const res = yield call(searchApi.searchRepos, queryParams);
    yield put(saveMoreRepos(res.data));
  } catch (err) {
    yield put(fetchMoreReposFail(err.response));
  }
}
