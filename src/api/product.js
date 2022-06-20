import axios from '../config/axios';

export const getAllProduct = () => axios.get('/products');

export const getProductById = (id) => axios.get('/products/' + id);

export const getRecommendProduct = () => axios.get('/products/recommend');
