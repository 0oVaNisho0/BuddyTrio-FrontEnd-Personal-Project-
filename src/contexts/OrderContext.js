import { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { getOrderItemByOrderId, getUserOrder } from '../api/order';

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [allAddress, setAllAddress] = useState('');
  const [orderItems, setOrderItems] = useState([]);

  const fetchOrder = async () => {
    try {
      const res = await getUserOrder();
      setOrders(res.data.orders);
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

  return (
    <OrderContext.Provider
      value={{
        fetchOrder,
        orders,
        orderItems,
        setOrderItems,
        allAddress,
        setAllAddress,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

const useOrder = () => {
  const ctx = useContext(OrderContext);
  return ctx;
};

export default OrderContextProvider;

export { useOrder };
