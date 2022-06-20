import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterProduct } from '../actions/ProductAction';
import ButtonBasic from '../components/common/ButtonBasic';
import SearchEngine from '../components/common/SearchEngine';
import AdminProductList from '../components/product/AdminProductList';
import { useProduct } from '../contexts/ProductContext';

function ProductAdminPage() {
  const { dispatch, filterInput, fetchProduct } = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleAddProductClick = () => {
    navigate('/product/admin/add');
  };

  return (
    <>
      <div className="tw-min-h-full tw-my-3 tw-flex tw-items-center tw-justify-center tw-gap-8 tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <SearchEngine
          filterInput={filterInput}
          dispatch={dispatch}
          filterProduct={filterProduct}
        />
        <ButtonBasic
          title="Add Product"
          handleOnClick={handleAddProductClick}
        />
      </div>

      <AdminProductList />
    </>
  );
}

export default ProductAdminPage;
