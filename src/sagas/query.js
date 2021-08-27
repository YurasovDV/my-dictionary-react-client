import {
  put,
  call,
  all,
  takeLatest,
} from "redux-saga/effects";

import * as types from "../actions/types";
import DictService from "../services/dict.service";
import { toastr } from 'react-redux-toastr';

const getPageAsync = async (query) => {
  const res = await DictService.getPage(query);
  return res;
};

function* getPage(action) {
  try {
    let query = action.payload;
    const response = yield call(() => getPageAsync(query));
    yield put({ type: types.GET_WORDS_SUCCESS, payload: response });
  } catch (err) {
    const msg = typeof err === 'string' ? err : err.message;
    toastr.error("Could not get words", msg);
    yield put({ type: types.GET_WORDS_FAIL, payload: msg });
  }
}

export function* wordsQuerySaga() {
  yield all([
    takeLatest(types.GET_WORDS, getPage),
  ]);
}
