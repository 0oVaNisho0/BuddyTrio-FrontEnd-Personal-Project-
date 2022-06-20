import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useOrder } from '../../contexts/OrderContext';

function OrderFooter() {
  const { orderItems } = useOrder();
  const { orderId } = useParams();

  const { carts } = useCart();
  return (
    <div className="tw-grid  tw-grid-cols-12 tw-bg-white tw-rounded-t-md tw--mt-0.5">
      <div className="tw-py-5 tw-col-span-2 tw-text-center tw-border-l-2 tw-border-b-2"></div>
      <div className="tw-py-5 tw-col-span-6 tw-text-center tw-border-b-2 tw--ml-0.5"></div>
      <div className="tw-py-5 tw-text-xl tw-text-center tw-border-2 tw--ml-0.5">
        Total :
      </div>
      <div className="tw-py-5 tw-text-xl tw-text-center tw-col-span-3 tw-border-2 tw--ml-0.5">
        {(orderId ? orderItems : carts).reduce((prev, cur) => {
          prev += cur.amount * cur.Product.price;
          return prev;
        }, 0) + ' บาท'}
      </div>
    </div>
  );
}

export default OrderFooter;
