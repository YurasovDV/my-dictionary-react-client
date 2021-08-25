 //import { combineReducers } from 'redux'
 import reduceReducers from 'reduce-reducers';
import dictionaryQueryReducer  from './dictionaryQuery';
import dictionaryCommandReducer  from './dictionaryCommand';
import repetitionCommandReducer  from './repetitionCommand';

export default reduceReducers(
    dictionaryQueryReducer,
    dictionaryCommandReducer,
    repetitionCommandReducer
    );