import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { changeRecommend, deleteProduct } from '../../api/admin';
import { useProduct } from '../../contexts/ProductContext';

function ProductItem({ product, status }) {
  const { fetchProduct } = useProduct();
  const { id, productPic, name, price, recommend } = product;
  const navigate = useNavigate();

  const handleChangeRecommend = async () => {
    try {
      Swal.fire({
        title: 'Please Wait',
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await changeRecommend({ id });

      await fetchProduct();

      Swal.close();

      if (recommend) {
        Swal.fire({
          icon: 'success',
          title: 'Unrecommend this product',
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Recommend this product',
          showConfirmButton: false,
          timer: 1000,
        });
      }
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

  const handleClickEdit = () => {
    navigate(`/product/admin/id/${id}`);
  };

  const handleClickProduct = () => {
    navigate(`/product/id/${id}`);
  };

  const handleDeleteProduct = async () => {
    try {
      const res = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (res.isConfirmed) {
        Swal.fire({
          title: 'Please Wait',
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        await deleteProduct(id);

        Swal.close();

        Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
        await fetchProduct();
      }
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
  return (
    <div className="tw-group tw-relative">
      <div
        className={`tw-w-full  tw-min-h-72 tw-bg-gray-200 tw-aspect-w-1 tw-aspect-h-1  tw-rounded${
          status === 'edit' ? '-t' : ''
        }-md tw-overflow-hidden ${
          status === 'edit' ? '' : 'group-'
        }hover:tw-opacity-75 lg:tw-h-72 lg:tw-aspect-none`}
        onClick={handleClickProduct}
        role="button"
      >
        <img
          src={productPic}
          alt={name}
          className="tw-w-full tw-h-full tw-object-center tw-object-cover lg:tw-w-full lg:tw-h-full"
        />
      </div>

      {status === 'edit' && (
        <>
          <div className="tw-w-full  tw-justify-between  tw-h-8 tw-bg-gray-200 tw-aspect-w-1 tw-aspect-h-1  tw-overflow-hidden  lg:tw-h-8 lg:tw-aspect-none">
            <button
              className={`tw-w-full tw-flex tw-justify-center tw-gap-5 tw-items-center tw-h-full btn-${
                recommend ? 'success' : 'secondary'
              }`}
              onClick={handleChangeRecommend}
            >
              <div>RECOMMEND</div>
              <i className={`fa-solid fa-toggle-${recommend ? 'on' : 'off'}`} />
            </button>
          </div>
          <div className="tw-w-full tw-flex tw-justify-between  tw-h-10 tw-bg-gray-200 tw-aspect-w-1 tw-aspect-h-1 tw-rounded-b-md tw-overflow-hidden  lg:tw-h-10 lg:tw-aspect-none">
            <button className="tw-w-full btn-primary" onClick={handleClickEdit}>
              <i className="fa-solid fa-pen-to-square" />
            </button>

            <button
              className="tw-w-full btn-danger"
              onClick={handleDeleteProduct}
            >
              <i className="fa-solid fa-trash-can" />
            </button>
          </div>
        </>
      )}

      <div className="tw-mt-3 ">
        <h3 className="tw-text-sm tw-font-extrabold tw-tracking-tight tw-text-light-brown tw-truncate">
          {status === 'edit' ? (
            name
          ) : (
            <>
              <span
                aria-hidden="true"
                className="tw-absolute tw-inset-0"
                role="button"
                onClick={handleClickProduct}
              ></span>
              {name}
            </>
          )}
        </h3>

        <p className="tw-text-md tw-mt-1 tw-font-extrabold tw-tracking-tight tw-text-light-brown tw-whitespace-pre-wrap">
          {price + '   บาท'}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
