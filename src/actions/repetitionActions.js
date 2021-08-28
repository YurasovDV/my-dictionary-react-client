import * as types from "./types";

export function createRepetitionSet() {
  return { type: types.CREATE_REPETITION_SET, payload: {}};
}

export function selectOption(word, repetitionStatus){
    return { type : types.SELECT_OPTION, payload: new WordRepetitionModel(word.term, repetitionStatus) }
}

export function completeRepetition(wordDto) {
  return { type: types.COMPLETE_REPETITION, payload: wordDto };
}

