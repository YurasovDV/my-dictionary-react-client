import * as types from "../actions/types";

const initialState = {
  // source word set
  source: [],
  // words left to show
  currentSet: [],
  // words shown already
  results: [],

  isLoading: false,
};

export default function repetitionReducer(
  state = initialState,
  action = null
) {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_REPETITION_SET:
      return { ...state, isLoading: true };
    case types.CREATE_REPETITION_SET_SUCCESS:
      return { ...state, isLoading: false };
    case types.CREATE_REPETITION_SET_FAIL:
      return { ...state, isLoading: false };

    case types.COMPLETE_REPETITION:
      return { ...state, isLoading: true };
    case types.COMPLETE_REPETITION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        source: [],
        currentSet: [],
        results: [],
      };
    case types.COMPLETE_REPETITION_FAIL:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}
