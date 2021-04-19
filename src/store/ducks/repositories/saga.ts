import { call, put } from 'redux-saga/effects';
import Api from './../../../services/api';

import { loadSuccess, loadFailure } from './actions';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export function* load() {
  try {
    const response: ResponseGenerator = yield call(
      Api.get,
      'users/uandersonmbc/repos'
    );

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
