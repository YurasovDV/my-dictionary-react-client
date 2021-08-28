import * as types from "../actions/types";

const initialState = {
  // todo maybe separate property for all pages
  words: [],
  isLoading: false,
  error: null,
  skip: 0,
  take: 20,
};

export default function dictionaryQueryReducer(
  state = initialState,
  action = null
) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_WORDS:
      return {
        ...state,
        isLoading: true,
        skip: payload.skip,
        take: payload.take,
      };

    case types.GET_WORDS_SUCCESS:
      return { ...state, isLoading: false, words: payload };

    case types.GET_WORDS_FAIL:
      return { ...state, isLoading: false, error: payload };

    case types.ADD_WORD:
      return { ...state, isLoading: true };
    case types.ADD_WORD_SUCCESS:
      return { ...state, isLoading: false };
    case types.ADD_WORD_FAIL:
      return { ...state, isLoading: false, error: payload };

    case types.UPDATE_WORD:
      return { ...state, isLoading: true };
    case types.UPDATE_WORD_SUCCESS:
      return { ...state, isLoading: false };
    case types.UPDATE_WORD_FAIL:
      return { ...state, isLoading: false, error: payload };

    case types.DELETE_WORD:
      return { ...state, isLoading: true };
    case types.DELETE_WORD_SUCCESS:
      return { ...state, isLoading: false };
    case types.DELETE_WORD_FAIL:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
}

export { initialState };
