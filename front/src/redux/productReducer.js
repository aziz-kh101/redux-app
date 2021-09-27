import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  INISIAL_PRODUCTS,
  MODIFY_PRODUCT,
} from "./actionType";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case INISIAL_PRODUCTS:
      return [...action.payload.products];
    case ADD_PRODUCT:
      return [...state, action.payload.product];
    case MODIFY_PRODUCT:
      return state.map((value) =>
        value.id === action.payload.id ? action.payload.product : value
      );
    case DELETE_PRODUCT:
      return state.filter((value) => value.id !== action.payload.id);
    default:
      return [];
  }
};
