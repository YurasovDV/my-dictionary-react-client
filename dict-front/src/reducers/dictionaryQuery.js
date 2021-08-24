import * as types from "../actions/types";

const initialState = {
  words: [],
  isLoading: false,
  error: null,
};

export default function dictionaryQueryReducer(state = initialState, action = null) {
  const { type, payload } = action;

  switch (type) {

    case types.GET_WORDS:
        return { ...state, isLoading: true, words: payload };

    case types.GET_WORDS_SUCCESS:
        return { ...state, isLoading: false };
        
    case types.GET_WORDS_FAIL:
        return { ...state, isLoading: false, error: action.error };




    case types.ADD_WORD:
      return { ...state, isLoading: true, words: [...state.words, payload] };

      case types.ADD_WORD_SUCCESS:
        return { ...state, isLoading: false, words: [...state.words, payload] };

        case types.ADD_WORD_FAIL:
          return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
}

export { initialState };
