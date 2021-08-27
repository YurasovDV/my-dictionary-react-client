import { put, call, all, takeLatest } from "redux-saga/effects";

import * as types from "../actions/types";
import DictService from "../services/dict.service";
import { toastr } from 'react-redux-toastr';

function* addWord(action) {
  try {
    let word = action.payload;
    const response = yield call(() => addWordAsync(word));

    yield put({ type: types.ADD_WORD_SUCCESS, payload: response });
  } catch (err) {
    const msg = typeof err === 'string' ? err : err.message;
    toastr.error("Could not add word", msg);
    yield put({ type: types.ADD_WORD_FAIL, payload: msg });
  }
}

const addWordAsync = async (word) => {
  return DictService.create(word);
};

function* notImplemented(action) {
  try {
    yield put({ type: types.ADD_WORD_FAIL, payload: { a: 1 } });
  } catch (err) {
    yield put({ type: types.ADD_WORD_FAIL, payload: err });
  }
}

export function* wordsCommandSaga() {
  yield all([
    takeLatest(types.ADD_WORD, addWord),
    takeLatest(types.UPDATE_WORD, notImplemented),
    takeLatest(types.DELETE_WORD, notImplemented),

    takeLatest(types.CREATE_REPETITION_SET, notImplemented),

    takeLatest(types.COMPLETE_REPETITION, notImplemented),
  ]);
}
