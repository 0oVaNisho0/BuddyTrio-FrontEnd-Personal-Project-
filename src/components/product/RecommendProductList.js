import { useProduct } from '../../contexts/ProductContext';
import ProductItem from './ProductItem';

function RecommendProductList() {
  const { recommendProducts } = useProduct();

  return (
    <div className="tw-bg-white">
      <div className="tw-max-w-2xl tw-mx-auto tw-pt-16 tw-px-4 sm:tw-pt-24 sm:tw-px-6 lg:tw-max-w-7xl lg:tw-px-8">
        <h2 className="tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-light-brown">
          Recommend Product
        </h2>

        <div className="tw-mt-6 tw-grid tw-grid-cols-1 tw-gap-y-10 tw-gap-x-6 sm:tw-grid-cols-2 lg:tw-grid-cols-4 xl:tw-gap-x-8">
          {recommendProducts.map((el) => (
            <ProductItem key={el.id} product={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecommendProductList;
