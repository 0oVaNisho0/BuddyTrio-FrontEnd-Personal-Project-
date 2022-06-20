import { filterProduct } from '../actions/ProductAction';
import SearchEngine from '../components/common/SearchEngine';
import AllProductList from '../components/product/AllProductList';
import { useProduct } from '../contexts/ProductContext';

function SearchPage() {
  const { dispatch, filterInput } = useProduct();
  return (
    <>
      <div className="tw-min-h-full tw-my-3 tw-flex tw-items-center tw-justify-center tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <SearchEngine
          filterInput={filterInput}
          dispatch={dispatch}
          filterProduct={filterProduct}
        />
      </div>
      <AllProductList />
    </>
  );
}

export default SearchPage;
