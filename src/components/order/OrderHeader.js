function OrderHeader() {
  return (
    <div className="tw-grid  tw-grid-cols-12 tw-bg-white tw-rounded-t-md tw-text-lg">
      <div className="tw-py-5 tw-col-span-2 tw-text-center tw-border-2">
        Product
      </div>
      <div className="tw-py-5 tw-col-span-6 tw-text-center tw-border-2 tw--ml-0.5">
        Description
      </div>
      <div className="tw-py-5 tw-text-center tw-border-2 tw--ml-0.5">
        Unit Price
      </div>
      <div className="tw-py-5 tw-text-center tw-border-2 tw--ml-0.5">
        Amount
      </div>
      <div className="tw-py-8 tw-text-center tw-border-2 tw--ml-0.5"> </div>
      <div className="tw-py-5 tw-text-center tw-border-2 tw--ml-0.5">Total</div>
    </div>
  );
}

export default OrderHeader;
