import ButtonBasic from '../components/common/ButtonBasic';
import PlaceholderUpload from '../assets/images/PlaceholderUpload.jpeg';
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import validator from 'validator';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../api/product';
import { addProduct, updateProduct } from '../api/admin';

function AddProductPage() {
  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productPic, setProductPic] = useState(null);

  const productPicInputEl = useRef();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (params?.productId) {
          const res = await getProductById(params.productId);
          const { name, price, quantity, productDetail, productPic } =
            res.data.product;
          setNameProduct(name);
          setPrice(price);
          setQuantity(quantity);
          setProductDetail(productDetail);
          setProductPic(productPic);
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

    fetchData();
  }, [params?.productId]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (validator.isEmpty(nameProduct, { ignore_whitespace: true })) {
        setNameProduct('');
        throw new Error('Product Name Connot Be Empty');
      }

      if (validator.isEmpty('' + price, { ignore_whitespace: true })) {
        setPrice('');
        throw new Error('Price Connot Be Empty');
      }

      if (validator.isEmpty('' + quantity, { ignore_whitespace: true })) {
        setQuantity('');
        throw new Error('Quantity Connot Be Empty');
      }

      const formData = new FormData();
      formData.append('name', nameProduct);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('productPic', productPic);
      formData.append('productDetail', productDetail);

      Swal.fire({
        title: 'Please Wait',
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      if (params?.productId) {
        await updateProduct(params.productId, formData);
      } else {
        await addProduct(formData);
      }

      Swal.close();

      Swal.fire({
        icon: 'success',
        title: params.productId
          ? 'Update Product Success'
          : 'Add Product Success',
        showConfirmButton: false,
        timer: 1500,
      });

      if (!params.productId) {
        setNameProduct('');
        setPrice('');
        setQuantity('');
        setProductDetail('');
        setProductPic(null);
        productPicInputEl.current.value = '';
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Excuse me',
        text: err?.response?.data?.message || err.message,
      });
    }
  };

  const handleClickBack = () => {
    navigate('/product/admin');
  };

  return (
    <div className="tw-max-w-3xl tw-m-auto tw-pt-6 tw-pb-10">
      <h3
        className="tw-font-extrabold hover:tw-opacity-75 tw-tracking-tight tw-text-light-brown tw-items-center tw-flex tw-w-fit"
        onClick={handleClickBack}
        role="button"
      >
        <i className="fa-solid fa-caret-left tw-text-2xl" />
        Back
      </h3>
      <h2 className="tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-light-brown tw-py-3">
        Add Product Section
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="tw-flex tw-justify-between tw-flex-wrap tw-items-end">
          <img
            className="tw-h-96 tw-rounded-2xl"
            width="400"
            alt="productPic"
            role="button"
            src={
              productPic
                ? typeof productPic === 'string'
                  ? productPic
                  : URL.createObjectURL(productPic)
                : PlaceholderUpload
            }
            onClick={() => productPicInputEl.current.click()}
          />
          <input
            type="file"
            className="d-none"
            ref={productPicInputEl}
            onChange={(e) => {
              if (e.target.files[0]) {
                setProductPic(e.target.files[0]);
              }
            }}
          />
          <div className="tw-items-center tw-w-80 ">
            <div className="form-group">
              <label
                htmlFor="nameProduct"
                className="tw-font-extrabold tw-text-light-brown"
              >
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameProduct"
                required
                value={nameProduct}
                onChange={(e) => setNameProduct(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="price"
                className="tw-font-extrabold tw-text-light-brown"
              >
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="quantity"
                className="tw-font-extrabold tw-text-light-brown"
              >
                Quantity
              </label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="tw-font-extrabold tw-text-light-brown"
              >
                Product Detail
              </label>
              <textarea
                className="form-control tw-h-48"
                id="exampleFormControlTextarea1"
                rows="3"
                required
                value={productDetail}
                onChange={(e) => setProductDetail(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className=" tw-w-fit tw-m-auto tw-pt-5">
          <ButtonBasic
            title={params.productId ? 'Update Product' : 'Add Product'}
          />
        </div>
      </form>
    </div>
  );
}

export default AddProductPage;
