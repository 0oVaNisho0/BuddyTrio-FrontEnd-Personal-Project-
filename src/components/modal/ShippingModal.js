import { Modal } from 'react-bootstrap';
import { useOrder } from '../../contexts/OrderContext';

function ShippingModal(props) {
  const { setAllAddress } = useOrder();
  const handleClickSave = (e) => {
    if (
      props.state.firstName &&
      props.state.lastName &&
      props.state.phoneNumber &&
      props.state.province &&
      props.state.district &&
      props.state.zipCode &&
      props.state.address
    ) {
      setAllAddress(props.allAddress);
      props.onHide();
      e.preventDefault();
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="tw-text-light-brown tw-font-extrabold tw-whitespace-pre"
        >
          <i className="fa-solid fa-location-dot tw-text-2xl" />
          {'  Shipping Address'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="tw-my-2">
          <div className="tw-flex tw-gap-10 tw-mx-4">
            <input
              placeholder="First Name"
              className="form-control"
              required
              value={props.state.firstName}
              onChange={(e) => props.state.setFirstName(e.target.value)}
            />
            <input
              placeholder="Last Name"
              className="form-control"
              required
              value={props.state.lastName}
              onChange={(e) => props.state.setLastName(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-gap-10 tw-my-7 tw-mx-4">
            <input
              placeholder="Phone Number"
              className="form-control"
              required
              value={props.state.phoneNumber}
              onChange={(e) => props.state.setPhoneNumber(e.target.value)}
            />
            <input
              placeholder="Province"
              className="form-control"
              required
              value={props.state.province}
              onChange={(e) => props.state.setProvince(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-gap-10 tw-mx-4">
            <input
              placeholder="District"
              className="form-control"
              required
              value={props.state.district}
              onChange={(e) => props.state.setDistrict(e.target.value)}
            />
            <input
              placeholder="Zip Code"
              className="form-control"
              required
              value={props.state.zipCode}
              onChange={(e) => props.state.setZipCode(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-my-7 tw-mx-4">
            <textarea
              className="form-control tw-h-48"
              rows="3"
              required
              placeholder="Address"
              value={props.state.address}
              onChange={(e) => props.state.setAddress(e.target.value)}
            ></textarea>
          </div>
          <div className="tw-flex tw-justify-end tw-gap-4 tw-mx-4">
            <button
              onClick={handleClickSave}
              className="btn btn-primary"
              type=""
            >
              SAVE CHANGES
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ShippingModal;
