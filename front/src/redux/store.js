import { combineReducers, createStore } from "redux";
import { productReducer } from "./productReducer";

export default createStore(
  combineReducers({
    products: productReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
