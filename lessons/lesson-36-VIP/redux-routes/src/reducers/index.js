import {combineReducers} from "redux";
import cartReducer from './cart';
const allReducers = combineReducers({
    cartReducer,
    //Thên nhiều reducer ở đây
})
export default allReducers;