import * as types from "../actions/types";
import { repetitionStatus } from "../models/wordDto";
import { WordRepetitionModel } from "../models/wordDto";

const initialState = {
  // source word set
  source: [],
  // words left to show
  currentSet: [],
  // words shown already
  results: [],

  isLoading: false,
};

export default function repetitionReducer(state = initialState, action = null) {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_REPETITION_SET:
      return {
        ...state,
        isLoading: true,
        source: [],
        currentSet: [],
        results: [],
      };
    case types.CREATE_REPETITION_SET_SUCCESS:
      const preparedSet = prepareSet(payload);

      return {
        ...state,
        isLoading: true,
        source: payload,
        currentSet: preparedSet,
        results: [],
      };
    case types.CREATE_REPETITION_SET_FAIL:
      return { ...state, isLoading: false };

    case types.SELECT_OPTION:
      const term = payload.term;
      const workingSet = state.currentSet.filter((w) => w.term !== term);
      return {
        ...state,
        results: [...state.results, payload],
        currentSet: workingSet,
      };

    case types.REPETITION_TIMEOUT:
      const termToRemove = state.currentSet[0];
      const filtered = state.currentSet.filter((w) => w.term !== termToRemove.term);
      return {
        ...state,
        results: [
          ...state.results,
          new WordRepetitionModel(
            termToRemove,
            repetitionStatus.failedMultipleTimes
          ),
        ],
        currentSet: filtered,
      };

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

// advanced algorithm
function prepareSet(wordsList) {
  const allMeanings = wordsList.map((w) => w.translations).flat();

  let res = [];
  for (let i = 0; i < wordsList.length; i++) {
    let word = wordsList[i];
    let alternatives = allMeanings.filter(
      (m) => word.translations.indexOf(m) === -1
    );
    const indexSafe = Math.max(
      0,
      Math.floor(Math.random() * alternatives.length)
    );
    let randomOption = alternatives[indexSafe];
    res.push({
      term: word.term,
      translations: word.translations,
      option: randomOption,
    });
  }

  return res;
}
