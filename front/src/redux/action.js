const {
  ADD_PRODUCT,
  MODIFY_PRODUCT,
  DELETE_PRODUCT,
  INISIAL_PRODUCTS,
  PRODUCT_EDITING,
  CANCEL_EDITING,
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

const modifyProduct = (index, product) => {
  return {
    type: MODIFY_PRODUCT,
    payload: {
      index,
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

const editProduct = (product, index) => {
  return {
    type: PRODUCT_EDITING,
    payload: {
      product,
      index,
    },
  };
};

const cancelEditing = (editing) => {
  return {
    type: CANCEL_EDITING,
    payload: editing,
  };
};

export {
  addProduct,
  modifyProduct,
  deleteProduct,
  inisialProducts,
  editProduct,
  cancelEditing,
};
