// import { put } from 'redux-saga/effects';
import axios from 'axios';

export function* searchSaga(action) {
  const { url } = action.payload;
  const res = yield axios.get(url);
  // console.log(res);
}
