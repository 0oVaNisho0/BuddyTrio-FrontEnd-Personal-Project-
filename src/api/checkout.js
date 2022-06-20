import axios from '../config/axios';

export const checkoutCreditCard = (input) =>
  axios.post('/checkout/credit-card', input);
