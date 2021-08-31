import {
  put,
  call,
  all,
  takeLatest,
  race,
  take,
  delay,
  select,
} from "redux-saga/effects";

import * as types from "../actions/types";
import RepetitionService from "../services/repetition.service";
import { notifySuccess, notifyFail } from "./commonEffects";
import * as constants from "../constants";
import { browserHistory } from "../history";

function* createRepetitionSet() {
  try {
    const response = yield call(() => RepetitionService.createRepetitionSet());
    yield put({ type: types.CREATE_REPETITION_SET_SUCCESS, payload: response });
  } catch (err) {
    const msg = typeof err === "string" ? err : err.message;
    notifyFail(msg, `Could not start repetition`);
    yield put({ type: types.CREATE_REPETITION_SET_FAIL, payload: msg });
  }
}

function* waitForSelectOption() {
  while (true) {
    const event = yield take(types.SELECT_OPTION);
    return event;
  }
}

function* startRepetition() {
  const { answer, timeout } = yield race({
    answer: call(waitForSelectOption),
    timeout: delay(constants.REPETITION_TIMEOUT),
  });

  if (timeout) {
    notifyFail("Better luck next time", "Time is up");
    yield put({ type: types.REPETITION_TIMEOUT });
  }

  const state = yield select();
  if (state.repetitionState.currentSet.length === 0) {
    yield put({
      type: types.COMPLETE_REPETITION,
      payload: state.repetitionState.results,
    });
  }
}

function* completeRepetition(action) {
  try {
    yield call(() => RepetitionService.completeRepetition(action.payload));
    yield put({ type: types.COMPLETE_REPETITION_SUCCESS, payload: {} });
    notifySuccess("Succesful repetition");
    browserHistory.push("/results");
  } catch (err) {
    const msg = typeof err === "string" ? err : err.message;
    notifyFail(msg, `Could not complete repetition`);
    yield put({ type: types.COMPLETE_REPETITION_FAIL, payload: msg });
  }
}

export function* repetitionSaga() {
  yield all([
    takeLatest(types.CREATE_REPETITION_SET, createRepetitionSet),
    takeLatest(types.START_REPETITION_TIMER, startRepetition),
    takeLatest(types.COMPLETE_REPETITION, completeRepetition),
  ]);
}
