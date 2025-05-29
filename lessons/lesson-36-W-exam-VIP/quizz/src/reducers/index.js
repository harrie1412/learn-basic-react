import { combineReducers } from "redux";
import isLoginReducer from "./isLoginReducer";
const allReducer = combineReducers({
  isLoginReducer,
  //Thên nhiều reducer ở đây
});
export default allReducer;
