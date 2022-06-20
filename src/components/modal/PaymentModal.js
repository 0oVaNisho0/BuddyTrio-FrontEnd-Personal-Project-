import { Modal } from 'react-bootstrap';
import ButtonCredit from '../payment/ButtonCredit';

function PaymentModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="tw-flex tw-justify-center">
          <ButtonCredit rePay={true} orderId={props.orderId} />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PaymentModal;
