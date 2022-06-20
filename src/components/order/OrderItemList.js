import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useOrder } from '../../contexts/OrderContext';
import CartSummaryItem from '../cart/CartSummaryItem';
import Swal from 'sweetalert2';
import { getOrderItemByOrderId } from '../../api/order';

function OrderItemList() {
  const { carts } = useCart();
  const { orderItems, setOrderItems } = useOrder();
  const { orderId } = useParams();

  const fetchOrderItem = async () => {
    try {
      const res = await getOrderItemByOrderId(orderId);

      setOrderItems(res.data.orderItems);
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
    fetchOrderItem();
  }, []);

  return (
    <>
      {orderId
        ? orderItems?.map((el) => (
            <CartSummaryItem
              key={el.id}
              orderId={el.orderId}
              productPic={el.Product.productPic}
              name={el.Product.name}
              price={el.Product.price}
              amount={el.amount}
            />
          ))
        : carts?.map((el) => (
            <CartSummaryItem
              key={el.id}
              cartId={el.id}
              productId={el.productId}
              productPic={el.Product.productPic}
              name={el.Product.name}
              price={el.Product.price}
              amount={el.amount}
            />
          ))}
    </>
  );
}

export default OrderItemList;
