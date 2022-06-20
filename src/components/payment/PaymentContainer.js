import ButtonCredit from './ButtonCredit';
import ButtonIBanking from './ButtonIBanking';

function PaymentContainer() {
  return (
    <div className="tw-max-w-sm tw-m-auto tw-mb-5 tw-py-6 tw-border-2 tw-bg-white tw-text-light-brown tw-font-extrabold">
      <div className="tw-flex tw-justify-center">
        <ButtonCredit />
      </div>
      <div className="tw-flex tw-justify-center">
        {/* <ButtonIBanking /> */}
      </div>
    </div>
  );
}

export default PaymentContainer;
