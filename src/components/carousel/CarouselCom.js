import img01 from '../../assets/images/mockup/cas01.jpeg';
import img02 from '../../assets/images/mockup/cas02.jpeg';
import img03 from '../../assets/images/mockup/cas03.jpeg';
import { Carousel } from 'react-bootstrap';

function CarouselCom() {
  return (
    <Carousel className="tw-max-w-screen-md tw-m-auto">
      <Carousel.Item>
        <img
          className="d-block w-100 tw-max-h-96  "
          src={img01}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Promotion 1</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 tw-max-h-96  "
          src={img02}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Promotion 2</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 tw-max-h-96  "
          src={img03}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Promotion 3</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCom;
