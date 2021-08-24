import {
  put,
  call,
  all,
  takeLatest,
} from "redux-saga/effects";

import * as types from "../actions/types";
import DictService from "../services/dict.service";
import { Query } from "../models/query";

const defaultQuery = new Query();

function* getPage(query = defaultQuery) {
  try {
    const payload = yield call(() => getData(query));
    yield put({ type: types.GET_WORDS_SUCCESS, payload });
  } catch (err) {
    yield put({ type: types.GET_WORDS_FAIL, payload: err });
  }
}

export const getData = async (query) => {
  const res = await DictService.getPage(query);
  return res;
};

function* addWord(action) {
  try {
    yield put({ type: types.ADD_WORD_SUCCESS, payload: { a: 1 } });
  } catch (err) {
    yield put({ type: types.ADD_WORD_FAIL, payload: err });
  }
}

function* notImplemented(action) {
  try {
    yield put({ type: types.GET_WORDS_SUCCESS, payload: { a: 1 } });
  } catch (err) {
    yield put({ type: types.ADD_WORD_FAIL, payload: err });
  }
}


export function* wordsSaga() {
  yield all([
    takeLatest(types.GET_WORDS, getPage),

    takeLatest(types.ADD_WORD, addWord),
    takeLatest(types.UPDATE_WORD, notImplemented),
    takeLatest(types.DELETE_WORD, notImplemented),

    takeLatest(types.CREATE_REPETITION_SET, notImplemented),

    takeLatest(types.COMPLETE_REPETITION, notImplemented),
  ]);
}
