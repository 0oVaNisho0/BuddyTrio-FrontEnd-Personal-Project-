import { Dropdown } from 'react-bootstrap';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { useCart } from '../../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { deleteCart } from '../../../api/cart';
import Swal from 'sweetalert2';
import CartDropdownItem from '../../cart/CartDropdownItem';

function DropdownCart() {
  const { carts, fetchCart } = useCart();
  const navigate = useNavigate();

  const handleOnSelect = (e) => {
    if (e === 'sum') {
      return;
    }
    navigate(`/product/id/${e}`);
  };

  const handleSummaryCart = async () => {
    navigate('/order/summary');
  };

  const handleDeleteCart = async (cartId) => {
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
    <div className="tw-border tw-rounded-3xl tw-shadow ">
      <Dropdown onSelect={handleOnSelect}>
        <Dropdown.Toggle
          variant=""
          id="dropdown-basic"
          className="tw-flex tw-items-center tw-text-light-brown tw-px-2"
        >
          <h2 className="tw-px-1 tw-font-extrabold tw-text-light-brown">
            {carts.length}
          </h2>
          <ShoppingCartIcon className="tw-h-7 tw-w-7 " />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Header>
            <div className="tw-w-72">YOUR CART</div>
          </Dropdown.Header>

          {carts.map((el) => (
            <CartDropdownItem
              key={el.id}
              cartId={el.id}
              userId={el.Product.id}
              productPic={el.Product.productPic}
              name={el.Product.name}
              amount={el.amount}
              handleSummaryCart={handleSummaryCart}
              handleDeleteCart={handleDeleteCart}
            />
          ))}

          <Dropdown.ItemText>
            <div className="tw-flex tw-justify-center tw-pt-2">
              <div className="tw-w-56 tw-border tw-shadow tw-rounded-md tw-text-center tw-py-1 tw-whitespace-pre-wrap">
                {`ราคาสินค้าทั้งหมด : ${carts.reduce((prev, cur) => {
                  prev += cur.amount * cur.Product.price;
                  return prev;
                }, 0)} บาท`}
              </div>
            </div>
          </Dropdown.ItemText>

          <Dropdown.Divider />

          <Dropdown.Item eventKey="sum">
            <div className="tw-flex tw-justify-center">
              <div className="btn btn-dark tw-w-44" onClick={handleSummaryCart}>
                สั่งซื้อสินค้า
              </div>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownCart;
