import * as types from "../actions/types";

export default function repetitionCommandReducer(
  state = {},
  action = null) {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_REPETITION_SET:
      return state;
    case types.CREATE_REPETITION_SET_SUCCESS:
      return state;
    case types.CREATE_REPETITION_SET_FAIL:
      return state;


    case types.COMPLETE_REPETITION:
      return state;
    case types.COMPLETE_REPETITION_SUCCESS:
      return state;
    case types.COMPLETE_REPETITION_FAIL:
      return state;

    default:
      return state;
  }
}
