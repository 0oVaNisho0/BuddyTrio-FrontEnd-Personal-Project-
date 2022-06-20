import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/solid';
import { useAuth } from '../../../contexts/AuthContext';

function DropdownUser() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        className="tw-flex tw-items-center tw-text-light-brown"
      >
        <UserCircleIcon className="tw-h-7 tw-w-7 " />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Header className="tw-text-xl">
          {user.nickName}
        </Dropdown.Header>
        {user.role === 'ADMIN' && (
          <>
            <Dropdown.Item eventKey="1">
              <div
                className="tw-text-light-brown tw-text-lg"
                onClick={() => navigate('/product/admin')}
              >
                Product Panel
              </div>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <div
                className="tw-text-light-brown tw-text-lg"
                onClick={() => navigate('/promotion/admin')}
              >
                Promotion Panel
              </div>
            </Dropdown.Item>
          </>
        )}
        {user && (
          <Dropdown.Item eventKey="2">
            <div
              className="tw-text-light-brown tw-text-lg"
              onClick={() => navigate('/order/list')}
            >
              Order
            </div>
          </Dropdown.Item>
        )}

        <Dropdown.Item eventKey="3" onClick={logout}>
          <div className="tw-text-light-brown tw-text-lg">Logout</div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownUser;
