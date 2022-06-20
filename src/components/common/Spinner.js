function Spinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center offcanvas-backdrop show"
      style={{ zIndex: 1100 }}
    >
      <div className="spinner-border tw-text-white "></div>
      <span className="ms-3 tw-text-white tw-font-extrabold tw-text-2xl">
        Loading...
      </span>
    </div>
  );
}

export default Spinner;
