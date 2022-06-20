import axios from '../config/axios';

export const addProduct = (input) => axios.post('/admins/add', input);

export const updateProduct = (id, input) =>
  axios.patch('/admins/update/' + id, input);

export const changeRecommend = (input) =>
  axios.patch('/admins/recommend', input);

export const deleteProduct = (id) => axios.delete(`/admins/delete/${id}`);
