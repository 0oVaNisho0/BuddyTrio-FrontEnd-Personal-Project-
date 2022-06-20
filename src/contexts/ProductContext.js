import { createContext, useContext, useEffect, useReducer } from 'react';
import Swal from 'sweetalert2';
import { initProduct, initRecommendProduct } from '../actions/ProductAction';
import { getAllProduct, getRecommendProduct } from '../api/product';
import ProductReducer, { initial } from '../reducer/ProductReducer';

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [{ products, recommendProducts, filterInput }, dispatch] = useReducer(
    ProductReducer,
    initial
  );

  const fetchProduct = async () => {
    try {
      const resAll = await getAllProduct();
      dispatch(initProduct(resAll.data.products));
      const resRecommend = await getRecommendProduct();
      dispatch(initRecommendProduct(resRecommend.data.products));
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Excuse me',
        text: err?.response?.data?.message || err,
        didOpen: () => {
          Swal.hideLoading();
        },
      });
    }
  };

  const filterProduct = products.filter((el) =>
    el.name.toUpperCase().includes(filterInput.toUpperCase())
  );

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: filterProduct,
        filterInput,
        fetchProduct,
        dispatch,
        recommendProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const ctx = useContext(ProductContext);
  return ctx;
}

export default ProductContextProvider;

export { useProduct };
