import { all } from "@redux-saga/core/effects";
import { wordsQuerySaga } from "./query";
import { wordsCommandSaga } from "./command";


export default function* rootSaga() {
  yield all([wordsQuerySaga(), wordsCommandSaga()]);
}
