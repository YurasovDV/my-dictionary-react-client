import {
  put,
  call,
  all,
  takeLatest,
} from "redux-saga/effects";

import * as types from "../actions/types";
import DictService from "../services/dict.service";

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
    yield put({ type: types.GET_WORDS_FAIL, payload: err });
  }
}

export function* wordsQuerySaga() {
  yield all([
    takeLatest(types.GET_WORDS, getPage),
  ]);
}
