import { all } from "@redux-saga/core/effects";
import { wordsSaga } from './query'

export default function* rootSaga(){
    yield all([ wordsSaga() ])
}