import * as types from "./types";

export function getPage() {
  return { type: types.GET_WORDS };
}

export function addWord(wordDto) {
  return { type: types.ADD_WORD, wordDto };
}

export function updateWord(Word) {
  return { type: types.UPDATE_WORD, Word };
}

export function deleteWord(term) {
  return { type: types.DELETE_WORD, term };
}

/*
export const getPage = () => async (dispatch) => {
    try {
        const res = await DictService.getAll();

        dispatch({
            type: GET_WORDS,
            payload: res.data
        });
        // ?? return Promise.resolve(res.data)
    }
    catch (err) {
        return Promise.reject(err);
    }
};*/
