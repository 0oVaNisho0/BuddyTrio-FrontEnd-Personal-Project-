import OrderListHeader from './OrderListHeader';
import OrderListOrderItem from './OrderListOrderItem';

function OrderListContainer() {
  return (
    <div className="tw-max-w-6xl tw-m-auto tw-mt-6 tw-mb-5 tw-rounded-md tw-text-light-brown tw-font-extrabold">
      <OrderListHeader />
      <OrderListOrderItem />
    </div>
  );
}

export default OrderListContainer;
