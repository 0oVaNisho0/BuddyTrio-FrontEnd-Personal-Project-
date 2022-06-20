import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getProductById } from '../api/product';
import { useAuth } from '../contexts/AuthContext';
import { addCart } from '../api/cart';
import { useCart } from '../contexts/CartContext';

function ProductPage() {
  const { user } = useAuth();
  const { fetchCart } = useCart();
  const params = useParams();

  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productPic, setProductPic] = useState(null);
  const [amount, setAmount] = useState(1);

  const navigate = useNavigate();

  const handleAddCart = async () => {
    try {
      if (user) {
        const res = await Swal.fire({
          title: 'Are you sure?',
          text: 'Do you want to add this product to cart?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Add it',
        });

        if (res.isConfirmed) {
          Swal.fire({
            title: 'Please Wait',
            showConfirmButton: false,
            didOpen: () => {
              Swal.showLoading();
            },
            didClose: () => {},
          });

          await addCart({
            amount,
            productId: params.productId,
          });

          Swal.close();

          Swal.fire({
            icon: 'success',
            title: 'Add To Cart Success',
            text: `You add total ${amount} product to cart`,
            showConfirmButton: false,
            didOpen: () => {
              Swal.hideLoading();
            },
            timer: 1500,
          });
          await fetchCart();
        }
      } else {
        const res = await Swal.fire({
          title: 'You have to login!',
          text: 'Do you want to go to login now?',
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Login',
        });

        if (res.isConfirmed) {
          navigate('/login');
        }
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Excuse me',
        text: err?.response?.data?.message || err.message,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductById(params.productId);
        const { name, price, productDetail, productPic } = res.data.product;
        setNameProduct(name);
        setPrice(price);
        setProductDetail(productDetail);
        setProductPic(productPic);
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Excuse me',
          text: err?.response?.data?.message || err.message,
          didOpen: () => {
            Swal.showLoading();
          },
        });
      }
    };
    fetchData();
  }, [params.productId]);
  return (
    <div className="tw-max-w-6xl tw-m-auto tw-pt-6 tw-pb-10">
      <div className="tw-flex tw-justify-between tw-flex-wrap tw-items-start tw-bg-white tw-py-5 tw-rounded-md">
        <div className="tw-mx-auto">
          <img
            className="tw-rounded-lg tw-h-96 tw-m-auto"
            width="400"
            alt="productPic"
            role="button"
            src={productPic}
          />
        </div>
        <div className="tw-w-7/12 tw-break-all tw-m-auto">
          <div className="tw-font-extrabold tw-text-light-brown tw-text-4xl tw-leading-normal tw-break-normal tw-whitespace-pre-wrap">
            {nameProduct}
          </div>

          <div className="tw-font-extrabold tw-text-light-brown tw-text-md tw-mt-3 tw-whitespace-pre-wrap">
            {productDetail}
          </div>

          <div className="tw-font-extrabold  tw-text-light-brown tw-text-2xl tw-underline tw-mt-3 tw-whitespace-pre-wrap">
            {price + '  บาท'}
          </div>

          <div className="tw-mt-5 tw-flex tw-items-stretch tw-justify-start tw-gap-10 ">
            <div className="tw-flex  ">
              <button
                className="btn btn-dark hover:tw-opacity-75"
                onClick={() =>
                  setAmount((prev) => {
                    if (amount > 1) return prev - 1;
                    return 1;
                  })
                }
              >
                <i className="fa-solid fa-minus" />
              </button>

              <h2 className="tw-px-5 tw-flex tw-justify-center tw-items-center tw-border tw-rounded-md  ">
                {amount}
              </h2>

              <button
                className="btn btn-dark hover:tw-opacity-75"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                <i className="fa-solid fa-plus" />
              </button>
            </div>

            <button
              className="btn btn-dark tw-px-20 hover:tw-opacity-75"
              onClick={handleAddCart}
            >
              <i className="fa-solid fa-cart-plus" /> ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
