import {
  put,
  call,
  all,
  takeLatest,
  race,
  take,
  delay
} from "redux-saga/effects";

import * as types from "../actions/types";
import RepetitionService from "../services/repetition.service";
import { notifySuccess, notifyFail } from "./commonEffects";
import  * as constants from '../constants';

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

function* waitForSelectOption(){
    while(true){
        const event = yield take(types.SELECT_OPTION);
        return event;
    }
}

function* startRepetition(){
    const { answer, timeout } = yield race({
        answer: call(waitForSelectOption),
        timeout: delay(constants.REPETITION_TIMEOUT)
    });

    if(answer){
        notifySuccess(`What a speed`);
    }
    else{
        notifyFail(`Time is up`);
        yield put({ type: types.REPETITION_TIMEOUT } );
    }
} 

function* completeRepetition(action) {
  try {
    let _ = yield call(() => RepetitionService.completeRepetition(action.payload));
    yield put({ type: types.COMPLETE_REPETITION_SUCCESS, payload: {} });
    notifySuccess("Succesful repetition");
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
