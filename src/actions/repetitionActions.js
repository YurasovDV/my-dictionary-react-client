import * as types from "./types";
import { WordRepetitionModel } from '../models/wordDto';

export function createRepetitionSet() {
  return { type: types.CREATE_REPETITION_SET, payload: {}};
}

export function startRepetitionTimer(){
  return { type: types.START_REPETITION_TIMER, payload: {} }
}

export function selectOption(word, repetitionStatus){
    return { type : types.SELECT_OPTION, payload: new WordRepetitionModel(word, repetitionStatus) }
}

export function completeRepetition(wordDto) {
  return { type: types.COMPLETE_REPETITION, payload: wordDto };
}

