import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

function SignInPage() {
  const { login } = useAuth();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      await login(userName, password);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Excuse me',
        text: 'Invalid Username Or Password',
      });
    }
  };
  return (
    <>
      <div className="tw-min-h-full tw-my-3 tw-flex tw-items-center tw-justify-center tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-max-w-md tw-w-full tw-space-y-8">
          <div>
            <div className=" tw-text-6xl tw-text-center">
              <i className="fa-solid fa-user-lock"></i>
            </div>
            <h2 className="tw-mt-6 tw-text-center tw-text-3xl tw-font-extrabold tw-text-dark">
              Welcome to WorldPets!
            </h2>
          </div>
          <form
            className="tw-mt-8 tw-space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmitLogin}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            {/* <div className="tw-rounded-md tw-shadow-sm tw--space-y-px"> */}

            <div>
              {/* <label htmlFor="username" className="tw-sr-only">
                  Username
                </label> */}
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="tw-appearance-none tw-rounded-none tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-placeholder-gray-500 tw-text-gray-900 tw-rounded-full focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 focus:tw-z-10 sm:tw-text-sm"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              {/* <label htmlFor="password" className="tw-sr-only">
                  Password
                </label> */}
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="tw-appearance-none tw-rounded-none tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-placeholder-gray-500 tw-text-gray-900 tw-rounded-full focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 focus:tw-z-10 sm:tw-text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* </div> */}

            <div className="tw-flex tw-items-center tw-justify-between">
              <div className="tw-flex tw-items-center"></div>

              <div className="tw-text-sm">
                <Link
                  to="/register"
                  className="tw-font-medium tw-text-black hover:tw-text-gray-700"
                >
                  Create New Account
                </Link>
              </div>
            </div>

            <div className="tw-flex tw-justify-center">
              <button
                type="submit"
                className="tw-group tw-relative  tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent  tw-font-medium tw-rounded-md tw-text-white tw-bg-black hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
              >
                <span className="tw-absolute tw-left-0 tw-inset-y-0 tw-flex tw-items-center tw-pl-3"></span>
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
