import CarouselCom from '../components/carousel/CarouselCom';
import AllProductList from '../components/product/AllProductList';
import RecommendProductList from '../components/product/RecommendProductList';

function HomePage() {
  return (
    <>
      <CarouselCom />
      <RecommendProductList />
      <AllProductList />
    </>
  );
}

export default HomePage;
