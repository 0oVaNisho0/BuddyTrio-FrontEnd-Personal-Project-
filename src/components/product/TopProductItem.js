function TopProductItem({ src, alt, title, price, detail }) {
  return (
    <div className="tw-group tw-relative">
      <div className="tw-w-full tw-min-h-80 tw-bg-gray-200 tw-aspect-w-1 tw-aspect-h-1 tw-rounded-md tw-overflow-hidden group-hover:tw-opacity-75 lg:tw-h-80 lg:tw-aspect-none">
        <img
          src={src}
          alt={alt}
          className="tw-w-full tw-h-full tw-object-center tw-object-cover lg:tw-w-full lg:tw-h-full"
        />
      </div>
      <div className="tw-mt-4 tw-flex tw-justify-between">
        <div>
          <h3 className="tw-text-sm tw-text-light-brown">
            <a href="#">
              <span
                aria-hidden="true"
                className="tw-absolute tw-inset-0"
              ></span>
              {title}
            </a>
          </h3>
          <p className="tw-mt-1 tw-text-sm tw-text-light-brown">{detail}</p>
        </div>
        <p className="tw-text-sm tw-font-medium tw-text-gray-900">{price}</p>
      </div>
    </div>
  );
}

export default TopProductItem;
