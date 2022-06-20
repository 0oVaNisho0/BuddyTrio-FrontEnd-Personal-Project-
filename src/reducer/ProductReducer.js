import { FILTER_PRODUCT, INIT, INIT_RECOMMEND } from '../actions/ProductAction';

export const initial = {
  products: [],
  recommendProducts: [],
  filterInput: '',
};

export default function ProductReducer(state, action) {
  switch (action.type) {
    case INIT: {
      return { ...state, products: action.payload };
    }
    case FILTER_PRODUCT: {
      return { ...state, filterInput: action.payload };
    }
    case INIT_RECOMMEND: {
      return { ...state, recommendProducts: action.payload };
    }

    default: {
      return state;
    }
  }
}
