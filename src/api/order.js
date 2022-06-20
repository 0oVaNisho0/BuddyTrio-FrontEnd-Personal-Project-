import axios from '../config/axios';

export const addOrder = (input) => axios.post('/order/add', input);

export const getUserOrder = () => axios.get('/order');

export const getOrderItemByOrderId = (input) =>
  axios.get('/order/item/' + input);

export const updateUserOrder = (input) => axios.patch('/order/update', input);
