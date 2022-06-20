import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentModal from '../modal/PaymentModal';

function OrderItem({ id, address, status }) {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="tw-grid  tw-grid-cols-12   tw-bg-white ">
      <div className=" tw-py-2 tw-col-span-2 tw-text-center tw-border-2 tw--mt-0.5">
        {id}
      </div>
      <div className=" tw-col-span-6 tw-truncate  tw-flex tw-items-center tw-border-2 tw--mt-0.5 tw--ml-0.5">
        {address}
      </div>
      <div className="tw-flex tw-items-center tw-col-span-1 tw-justify-center tw-text-center tw-border-2 tw--mt-0.5 tw--ml-0.5">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/order/list/order-id/' + id)}
        >
          CHECK
        </button>
      </div>

      <div className="tw-flex tw-items-center tw-col-span-3 tw-justify-center tw-border-2 tw--mt-0.5 tw--ml-0.5">
        {status === 'SUCCESS' ? (
          <div className="text-success tw-whitespace-pre-wrap">
            {'Successful'}
          </div>
        ) : (
          <>
            <div className="text-danger tw-whitespace-pre-wrap">
              {'Pending:  '}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => setModalShow(true)}
            >
              Pay Now
            </button>
            <PaymentModal
              orderId={id}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default OrderItem;
