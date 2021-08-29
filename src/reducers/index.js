import { combineReducers } from "redux";
import dictState from "./dictionaryReducer";
import repetitionState from "./repetitionReducer";
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  dictState,
  repetitionState,
  toastr: toastrReducer
});
