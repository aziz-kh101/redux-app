const axios = require("axios").default;

const url = "http://localhost:3000/api/product";

export const _getAllproducts = () => {
  return axios.get(`${url}/all`).then((res) => res.data);
};

export const _deleteProduct = (id) => {
  return axios.delete(`${url}/${id}`).then((res) => res.data);
};

export const _addProduct = (product) => {
  return axios.post(`${url}/`, product).then((res) => res.data);
};

export const _editProduct = (id, product) => {
  return axios.put(`${url}/${id}`, product).then((res) => res.data);
};
