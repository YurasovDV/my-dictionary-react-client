import { all } from "@redux-saga/core/effects";
import { wordsQuerySaga } from "./query";
import { wordsCommandSaga } from "./command";
import { repetitionSaga } from "./repetition";


export default function* rootSaga() {
  yield all([wordsQuerySaga(), wordsCommandSaga(), repetitionSaga()]);
}
