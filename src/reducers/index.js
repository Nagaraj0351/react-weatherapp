import cityReducer from "./city";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  city: cityReducer,
});

export default allReducers;
