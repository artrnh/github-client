import { put } from 'redux-saga/effects';
import axios from 'axios';

import buildUrl from '../../utils/urlHelpers';
import { saveRepos, searchFail } from '../actions/search';

export default function* searchSaga(action) {
  try {
    const { query, filters } = action.payload;
    const url = buildUrl(query, filters);
    const res = yield axios.get(url);
    yield put(saveRepos(res.data));
  } catch (err) {
    yield put(searchFail(err));
  }
}
