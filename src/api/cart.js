import axios from '../config/axios';

export const getUserCart = () => axios.get('/carts');

export const addCart = (input) => axios.post('/carts/add', input);

export const updateCart = (input) => axios.put('/carts/update', input);

export const deleteCart = (input) => axios.delete('/carts/delete/' + input);

export const deleteAllCart = (input) =>
  axios.delete('/carts/delete/all/' + input);
