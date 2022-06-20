import { useState } from 'react';
import ShippingModal from '../modal/ShippingModal';

function ShippingContainer() {
  const [modalShow, setModalShow] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');

  const state = {
    firstName,
    lastName,
    phoneNumber,
    province,
    district,
    zipCode,
    address,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setProvince,
    setDistrict,
    setZipCode,
    setAddress,
  };

  const allAddress = `${firstName} ${lastName} ${phoneNumber} ${address}${
    address && ','
  }${district}${district && ','}${province}${province && ','}${zipCode}`;
  return (
    <div className="tw-max-w-6xl tw-m-auto tw-mb-5 tw-py-6 tw-border-2 tw-bg-white tw-text-light-brown tw-font-extrabold">
      <div className="tw-flex tw-justify-start tw-items-center tw-m-auto tw-max-w-5xl tw-gap-2">
        <i className="fa-solid fa-location-dot tw-text-2xl" />
        <div className="tw-text-2xl tw-whitespace-pre">Shipping Address</div>
      </div>
      <div className="tw-flex tw-justify-start tw-items-center tw-m-auto tw-mt-2 tw-max-w-5xl tw-gap-2">
        <div className="tw-truncate ">{allAddress}</div>
        <button className="btn btn-dark" onClick={() => setModalShow(true)}>
          CHANGES
        </button>
        <ShippingModal
          show={modalShow}
          state={state}
          onHide={() => setModalShow(false)}
          allAddress={allAddress}
        />
      </div>
    </div>
  );
}

export default ShippingContainer;
