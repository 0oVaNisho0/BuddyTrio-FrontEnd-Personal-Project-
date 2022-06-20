import { useEffect } from 'react';
import { useOrder } from '../../contexts/OrderContext';
import OrderItem from './OrderItem';

function OrderListOrderItem() {
  const { fetchOrder, orders } = useOrder();

  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <>
      {orders.map((el) => (
        <OrderItem
          key={el.id}
          id={el.id}
          address={el.address}
          status={el.status}
        />
      ))}
    </>
  );
}

export default OrderListOrderItem;
