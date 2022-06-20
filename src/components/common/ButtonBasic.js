function ButtonBasic({ title, handleOnClick }) {
  return (
    <button
      type="submit"
      className="tw-group tw-relative  tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent  tw-font-medium tw-rounded-md tw-text-white tw-bg-black hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
      onClick={handleOnClick}
    >
      <span className="tw-absolute tw-left-0 tw-inset-y-0 tw-flex tw-items-center tw-pl-3"></span>
      {title}
    </button>
  );
}

export default ButtonBasic;
