import * as types from "./types";

export function getPage(query) {
  return { type: types.GET_WORDS, payload: query};
}

export function addWord(wordDto) {
  return { type: types.ADD_WORD, payload: wordDto };
}

export function updateWord(word) {
  return { type: types.UPDATE_WORD, payload: word };
}

export function deleteWord(term) {
  return { type: types.DELETE_WORD, payload: term };
}
