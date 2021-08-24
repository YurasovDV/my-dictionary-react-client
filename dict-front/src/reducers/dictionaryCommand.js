import * as types from "../actions/types";
import initialState from "./dictionaryQuery";

export default function dictionaryCommandReducer(
  state = initialState,
  action = null) {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_WORD:
      return { ...state, isLoading: true, words: [...state.words, payload] };
    case types.ADD_WORD_SUCCESS:
      return { ...state, isLoading: false, words: [...state.words, payload] };
    case types.ADD_WORD_FAIL:
      return { ...state, isLoading: false, error: payload };

    case types.UPDATE_WORD:
      return { ...state, isLoading: true, words: [...state.words, payload] };
    case types.UPDATE_WORD_SUCCESS:
      return { ...state, isLoading: false, words: [...state.words, payload] };
    case types.UPDATE_WORD_FAIL:
      return { ...state, isLoading: false, error: payload };

    case types.DELETE_WORD:
      return { ...state, isLoading: true, words: [...state.words, payload] };
    case types.DELETE_WORD_SUCCESS:
      return { ...state, isLoading: false, words: [...state.words, payload] };
    case types.DELETE_WORD_FAIL:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
}
