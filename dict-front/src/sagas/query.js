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

const addWordAsync = async (word) => {
  return DictService.create(word);
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

function* addWord(action) {
  try {

    let word = action.payload;
    const response = yield call(() => addWordAsync(word));

    yield put({ type: types.ADD_WORD_SUCCESS, payload: response });
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
