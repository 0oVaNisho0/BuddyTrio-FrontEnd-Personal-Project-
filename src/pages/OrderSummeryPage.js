import { useParams } from 'react-router-dom';
import OrderContainer from '../components/order/OrderCantainer';
import PaymentContainer from '../components/payment/PaymentContainer';
import ShippingContainer from '../components/shipping/ShippingContainer';

function OrderSummeryPage() {
  const { orderId } = useParams();

  return (
    <>
      <OrderContainer />
      {orderId ? false : <ShippingContainer />}
      {orderId ? false : <PaymentContainer />}
    </>
  );
}

export default OrderSummeryPage;
