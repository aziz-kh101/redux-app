import {
  ADD_PRODUCT,
  CANCEL_EDITING,
  DELETE_PRODUCT,
  INISIAL_PRODUCTS,
  MODIFY_PRODUCT,
  PRODUCT_EDITING,
} from "./actionType";

const inisial_state = { list: [], editing: {} };
export const productReducer = (state = inisial_state, action) => {
  switch (action.type) {
    case INISIAL_PRODUCTS:
      return { ...state, list: action.payload.products };
    case ADD_PRODUCT:
      return {
        ...state,
        list: [...state.list, action.payload.product],
      };
    case MODIFY_PRODUCT:
      return {
        ...state,
        list: [
          ...Array.from(state.list).slice(0, action.payload.index),
          action.payload.product,
          ...Array.from(state.list).slice(action.payload.index),
        ],
        editing: {},
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        list: state.list.filter((value) => value.id !== action.payload.id),
      };
    case PRODUCT_EDITING:
      return {
        ...state,
        list: state.list.filter(
          (value) => value.id !== action.payload.product.id
        ),
        editing: action.payload,
      };
    case CANCEL_EDITING:
      return {
        ...state,
        list: [
          ...Array.from(state.list).slice(0, action.payload.index),
          action.payload.product,
          ...Array.from(state.list).slice(action.payload.index),
        ],
        editing: {},
      };
    default:
      return state;
  }
};
