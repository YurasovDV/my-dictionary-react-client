import { put, select } from "redux-saga/effects";
import { toastr } from 'react-redux-toastr';
import { Query } from '../models/query';
import * as types from "../actions/types";

export function notifySuccess(message, title = "Success") {
  toastr.success(title, message);
}

export function notifyFail(message, title = "Error") {
  toastr.error(title, message);
}

export function* refreshPage() {
    const state = yield select();
    yield put({ type: types.GET_WORDS, payload: new Query(state.dictState.skip, state.dictState.take) });
  }