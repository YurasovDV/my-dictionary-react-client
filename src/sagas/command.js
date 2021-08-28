import { put, call, all, takeLatest, takeEvery, select } from "redux-saga/effects";

import * as types from "../actions/types";
import DictService from "../services/dict.service";
import { toastr } from 'react-redux-toastr';
import { Query } from "../models/query";

function* addWord(action) {
  try {
    let word = action.payload;
    const response = yield call(() => DictService.create(word));
    notifySuccess(`Word '${word.term}' added`);
    yield put({ type: types.ADD_WORD_SUCCESS, payload: response });
    yield* refreshPage();
  } catch (err) {
    const msg = typeof err === 'string' ? err : err.message;
    notifyFail(msg, "Could not add word");
    yield put({ type: types.ADD_WORD_FAIL, payload: msg });
  }
}

function* deleteWord(action){
  try  {
    let term = action.payload;
    const response = yield call(() => DictService.delete(term));
    notifySuccess(`Word '${term}' deleted`);
    yield put({ type: types.DELETE_WORD_SUCCESS, payload: response });
    yield* refreshPage();
  } catch (err) {
    const msg = typeof err === 'string' ? err : err.message;
    notifyFail(msg, "Could not delete word");
    yield put({ type: types.DELETE_WORD_FAIL, payload: msg });
  }
}

function* updateWord(action){
  try  {
    let word = action.payload;
    const response = yield call(() => DictService.update(word));
    notifySuccess(`Word '${word.term}' edited`, "Changes saved");
    yield put({ type: types.UPDATE_WORD_SUCCESS, payload: response });
    yield* refreshPage();
  } catch (err) {
    const msg = typeof err === 'string' ? err : err.message;
    notifyFail(msg, "Could not update word");
    yield put({ type: types.UPDATE_WORD_FAIL, payload: msg });
  }
}


function* refreshPage() {
  const state = yield select();
  yield put({ type: types.GET_WORDS, payload: new Query(state.dictState.skip, state.dictState.take) });
}

function notifySuccess(message, title = "Success"){
  toastr.success(title, message);
}

function notifyFail(message, title = "Error"){
  toastr.error(title, message);
}


function* createRepetitionSet(action) {
  try {
    yield put({ type: types.CREATE_REPETITION_SET_SUCCESS, payload: { a: 1 } });
  } catch (err) {
    yield put({ type: types.CREATE_REPETITION_SET_FAIL, payload: err });
  }
}

function* completeRepetition(action) {
  try {
    yield put({ type: types.COMPLETE_REPETITION_SUCCESS, payload: { a: 1 } });
  } catch (err) {
    yield put({ type: types.COMPLETE_REPETITION_FAIL, payload: err });
  }
}

export function* wordsCommandSaga() {
  yield all([
    takeEvery(types.ADD_WORD, addWord),
    takeEvery(types.DELETE_WORD, deleteWord),
    takeEvery(types.UPDATE_WORD, updateWord),


    takeLatest(types.CREATE_REPETITION_SET, createRepetitionSet),

    takeLatest(types.COMPLETE_REPETITION, completeRepetition),
  ]);
}
