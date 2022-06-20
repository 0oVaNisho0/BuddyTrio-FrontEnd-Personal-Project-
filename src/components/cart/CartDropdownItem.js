import { Dropdown } from 'react-bootstrap';

function CartDropdownItem({
  cartId,
  userId,
  productPic,
  name,
  amount,
  handleSummaryCart,
  handleDeleteCart,
}) {
  return (
    <div className="tw-flex tw-items-center tw-justify-between tw-border tw-shadow tw-py-1">
      <Dropdown.Item eventKey={userId}>
        <div className="tw-flex tw-justify-start tw-items-center tw-gap-4">
          <img width="70" className="tw-rounded-md" src={productPic} />
          <div className="tw-truncate">{name}</div>
        </div>
      </Dropdown.Item>

      <div className="tw-text-center ">
        <h2 className=" tw-flex tw-justify-center tw-items-center tw-border tw-rounded-md  ">
          total: {amount}
        </h2>
        <div className="tw-flex">
          <button className="btn btn-primary" onClick={handleSummaryCart}>
            <i className="fa-solid fa-edit" />
          </button>

          <button
            className="btn btn-danger"
            onClick={async () => {
              handleDeleteCart(cartId);
            }}
          >
            <i className="fa-solid fa-trash-can" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDropdownItem;
