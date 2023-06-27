import { combineReducers } from "redux";
import productReducer from "./product/productReducers";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
