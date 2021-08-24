import { combineReducers } from 'redux'
import dictionaryQueryReducer  from './dictionaryQuery';
import dictionaryCommandReducer  from './dictionaryCommand';
import repetitionCommandReducer  from './repetitionCommand';

export default combineReducers(
    {
        dictionaryQueryReducer,
        dictionaryCommandReducer,
        repetitionCommandReducer
    });