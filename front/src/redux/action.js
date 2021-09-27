const {
  ADD_PRODUCT,
  MODIFY_PRODUCT,
  DELETE_PRODUCT,
  INISIAL_PRODUCTS,
} = require("./actionType");

const inisialProducts = (products) => {
  return {
    type: INISIAL_PRODUCTS,
    payload: {
      products,
    },
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  };
};

const modifyProduct = (id, product) => {
  return {
    type: MODIFY_PRODUCT,
    payload: {
      id,
      product,
    },
  };
};

const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};

export { addProduct, modifyProduct, deleteProduct, inisialProducts };
