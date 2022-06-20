import { useState } from 'react';
import Swal from 'sweetalert2';
import { deleteCart, updateCart } from '../../api/cart';
import { useCart } from '../../contexts/CartContext';

function CartSummaryItem({
  cartId,
  productId,
  productPic,
  name,
  price,
  amount,
  orderId,
}) {
  const { fetchCart } = useCart();
  const [addNumber, setAddNumber] = useState(amount);

  const handleUpdateCart = async () => {
    try {
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
        });

        await updateCart({ amount: addNumber, productId });

        Swal.close();

        Swal.fire('Updated!', 'Your cart item has been updated.', 'success');

        await fetchCart();
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Excuse me',
        text: err?.response?.data?.message || err.message,
        didOpen: () => {
          Swal.hideLoading();
        },
      });
    }
  };

  const handleDeleteCart = async () => {
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

        await deleteCart(cartId);

        Swal.close();

        Swal.fire('Deleted!', 'Your cart item has been deleted.', 'success');

        await fetchCart();
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Excuse me',
        text: err?.response?.data?.message || err.message,
        didOpen: () => {
          Swal.hideLoading();
        },
      });
    }
  };

  return (
    <div className="tw-grid  tw-grid-cols-12   tw-bg-white ">
      <div className=" tw-py-2 tw-col-span-2 tw-border-2 tw--mt-0.5">
        <img width="150" src={productPic} className="tw-m-auto" />
      </div>
      <div className=" tw-col-span-6 tw-truncate tw-flex tw-items-center tw-border-2 tw--mt-0.5 tw--ml-0.5">
        {name}
      </div>
      <div className="tw-flex tw-items-center tw-justify-center tw-text-center tw-border-2 tw--mt-0.5 tw--ml-0.5">
        {`${price} บาท`}
      </div>
      <div className="tw-flex tw-items-center tw-justify-center tw-text-center tw-border-2 tw--mt-0.5 tw--ml-0.5">
        <div>
          <h2 className=" tw-flex tw-justify-center tw-items-center tw-border tw-rounded-md">
            total: {amount}
          </h2>
          {orderId ? (
            false
          ) : (
            <>
              <div className="tw-flex">
                <button
                  className="btn btn-dark btn-sm hover:tw-bg-gray-700"
                  onClick={() =>
                    setAddNumber((prev) => {
                      if (addNumber > 1) return prev - 1;
                      return 1;
                    })
                  }
                >
                  <i className="fa-solid fa-minus " />
                </button>

                <button
                  className="btn btn-dark btn-sm hover:tw-bg-gray-700"
                  onClick={() => setAddNumber((prev) => prev + 1)}
                >
                  <i className="fa-solid fa-plus" />
                </button>
              </div>
              <h2 className=" tw-flex tw-justify-center tw-items-center tw-border tw-rounded-md">
                {addNumber}
              </h2>
              <h2 className=" tw-flex tw-justify-center tw-items-center ">
                <button
                  className="tw-group tw-relative  tw-flex tw-justify-center tw-px-1 tw-border tw-border-transparent  tw-font-medium tw-rounded-md tw-text-white tw-bg-black hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
                  onClick={handleUpdateCart}
                >
                  ADD
                </button>
              </h2>
            </>
          )}
        </div>
      </div>

      <div className="tw-flex tw-items-center tw-justify-center tw-border-2 tw--mt-0.5 tw--ml-0.5">
        {orderId ? (
          <div className="btn btn-secondary">
            <i className="fa-solid fa-trash-can" />
          </div>
        ) : (
          <button className="btn btn-danger" onClick={handleDeleteCart}>
            <i className="fa-solid fa-trash-can" />
          </button>
        )}
      </div>
      <div className="tw-flex tw-items-center tw-justify-center tw-text-center tw-border-2 tw--mt-0.5 tw--ml-0.5">
        {`${price * amount} บาท`}
      </div>
    </div>
  );
}

export default CartSummaryItem;
