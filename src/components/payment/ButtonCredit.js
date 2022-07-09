import Script from 'react-load-script';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { publicKey } from '../../confidential/omiseKey';
import { checkoutCreditCard } from '../../api/checkout';
import {
  addOrder,
  getOrderItemByOrderId,
  updateUserOrder,
} from '../../api/order';
import Swal from 'sweetalert2';
import { deleteAllCart } from '../../api/cart';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../contexts/OrderContext';
import { useEffect } from 'react';

let OmiseCard;

function ButtonCredit({ rePay, orderId }) {
  const { user } = useAuth();
  const { carts, fetchCart } = useCart();
  const {
    orderItems: rePayItems,
    fetchOrder,
    allAddress,
    setAllAddress,
    setOrderItems,
  } = useOrder();
  const navigate = useNavigate();

  const fetchOrderItem = async () => {
    try {
      const res = await getOrderItemByOrderId(orderId);
      console.log(res.data.orderItems);

      setOrderItems(res.data.orderItems);
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

  const rePayTotal =
    rePayItems.reduce((prev, cur) => {
      prev += cur.amount * cur.Product.price;
      return prev;
    }, 0) * 100;

  useEffect(() => {
    fetchOrderItem();
  }, []);

  const orderItems = carts.map((el) => ({
    price: el.Product.price,
    amount: el.amount,
    productId: el.Product.id,
  }));

  const total =
    carts.reduce((prev, cur) => {
      prev += cur.amount * cur.Product.price;
      return prev;
    }, 0) * 100;

  const handleScriptLoad = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey,
      frameLabel: 'BuddyTrio',
      submitLabel: 'PAY NOW',
      currency: 'thb',
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: 'credit_card',
      otherPaymentMethods: [],
    });
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      frameDescription: 'Invoice #5454',
      amount: rePay ? rePayTotal : total,
      onCreateTokenSuccess: handleCheckout,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler();
  };

  const handleCheckout = async (token) => {
    try {
      Swal.fire({
        title: 'Please Wait',
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const resOrder =
        rePay || (await addOrder({ address: allAddress, orderItems }));

      rePay || (await deleteAllCart(user.id));

      rePay || (await fetchCart());

      rePay || setAllAddress('');

      rePay || navigate('/order/list');

      const res = await checkoutCreditCard({
        token,
        total,
        email: user.email,
        nickName: user.nickName,
        userId: user.id,
      });
      console.log(res.data.charge);

      if (res.data.status === 'successful') {
        await updateUserOrder({
          status: 'SUCCESS',
          orderId: rePay ? orderId : resOrder.data.order.id,
        });
      }

      Swal.close();

      Swal.fire({
        icon: 'success',
        title: 'Thank you',
        html: `Your payment total is ${res.data.amount} Bath <br /> <div class="tw-flex tw-justify-center tw-mt-3">status: <div class="text-success tw-whitespace-pre-wrap"> ${res.data.status}</div></div>`,
      });

      await fetchOrder();
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
    <>
      <Script url="https://cdn.omise.co/omise.js" onLoad={handleScriptLoad} />
      <button className="btn btn-success" onClick={handleClick}>
        Pay With Credit Card
      </button>
    </>
  );
}

export default ButtonCredit;
