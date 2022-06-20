import { INIT } from '../actions/CartAction';

export const initial = {
  carts: [],
};

export default function CartReducer(state, action) {
  switch (action.type) {
    case INIT: {
      return { ...state, carts: action.payload };
    }

    default: {
      return state;
    }
  }
}
