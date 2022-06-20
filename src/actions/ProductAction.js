export const INIT = 'init';
export const FILTER_PRODUCT = 'filter_product';
export const INIT_RECOMMEND = 'init_recommend';

export const initProduct = (payload) => ({
  type: INIT,
  payload,
});

export const filterProduct = (payload) => ({
  type: FILTER_PRODUCT,
  payload,
});

export const initRecommendProduct = (payload) => ({
  type: INIT_RECOMMEND,
  payload,
});
