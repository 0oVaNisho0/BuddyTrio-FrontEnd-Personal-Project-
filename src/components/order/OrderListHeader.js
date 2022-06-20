function OrderListHeader() {
  return (
    <div className="tw-grid  tw-grid-cols-12 tw-bg-white tw-rounded-t-md  tw-text-lg">
      <div className="tw-py-5 tw-col-span-2 tw-text-center tw-border-2">
        Order Id
      </div>
      <div className="tw-py-5 tw-col-span-6 tw-text-center tw-border-2 tw--ml-0.5">
        Address
      </div>
      <div className="tw-py-5 tw-text-center tw-col-span-1 tw-border-2 tw--ml-0.5">
        Items
      </div>

      <div className="tw-py-5 tw-text-center tw-col-span-3 tw-border-2 tw--ml-0.5">
        Payment Status
      </div>
    </div>
  );
}

export default OrderListHeader;
