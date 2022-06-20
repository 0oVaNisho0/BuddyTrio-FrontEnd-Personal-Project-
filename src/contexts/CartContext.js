import { createContext, useContext, useEffect, useReducer } from 'react';
import Swal from 'sweetalert2';
import { initUserCart } from '../actions/CartAction';
import { getUserCart } from '../api/cart';
import CartReducer, { initial } from '../reducer/CartReducer';
import { useAuth } from './AuthContext';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const { user } = useAuth();
  const [{ carts }, dispatch] = useReducer(CartReducer, initial);

  const fetchCart = async () => {
    try {
      const res = await getUserCart();
      dispatch(initUserCart(res.data.carts));
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Excuse me',
        text: err?.response?.data?.message || err,
        didOpen: () => {
          Swal.hideLoading();
        },
      });
    }
  };

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  return (
    <CartContext.Provider value={{ fetchCart, carts }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const ctx = useContext(CartContext);
  return ctx;
};

export default CartContextProvider;

export { useCart };
