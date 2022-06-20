function SearchEngine({ filterInput, dispatch, filterProduct }) {
  return (
    <div className="input-group flex-nowrap tw-max-w-md tw-w-full ">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="addon-wrapping"
        value={filterInput}
        onChange={(e) => dispatch(filterProduct(e.target.value))}
      />
      <button className="input-group-text tw-text-3xl" id="addon-wrapping">
        <i className="fa-brands fa-searchengin "></i>
      </button>
    </div>
  );
}

export default SearchEngine;
