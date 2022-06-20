import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import validator from 'validator';

function RegisterPage() {
  const [userName, setUserName] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmitSignup = async (e) => {
    try {
      e.preventDefault();

      if (validator.isEmpty(userName, { ignore_whitespace: true })) {
        setUserName('');
        throw new Error('Username Connot Be Empty');
      }

      if (password !== confirmPassword) {
        throw new Error('Password And ConfirmPassword Not Match');
      }

      Swal.fire({
        title: 'Please Wait',
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await register({
        userName,
        nickName,
        email,
        password,
        confirmPassword,
      });

      Swal.close();

      Swal.fire({
        icon: 'success',
        title: 'Register Success',
        showConfirmButton: false,
        timer: 1500,
      });

      navigate('/login');
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
      <div className="tw-min-h-full tw-my-3 tw-flex tw-items-center tw-justify-center tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-max-w-md tw-w-full tw-space-y-8">
          <div>
            <div className=" tw-text-6xl tw-text-center">
              <i className="fa-solid fa-user-plus"></i>
            </div>
            <h2 className="tw-mt-6 tw-text-center tw-text-3xl tw-font-extrabold tw-text-dark">
              Create Account
            </h2>
          </div>

          <form
            className="tw-mt-8 tw-space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmitSignup}
          >
            <input type="hidden" name="remember" defaultValue="true" />

            <div>
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
              <input
                id="nickname"
                name="nickname"
                type="text"
                autoComplete="nickname"
                required
                className="tw-appearance-none tw-rounded-none tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-placeholder-gray-500 tw-text-gray-900 tw-rounded-full focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 focus:tw-z-10 sm:tw-text-sm"
                placeholder="Nickname"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              />
            </div>
            <div>
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

            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="Password"
                autoComplete="current-confirmPassword"
                required
                className="tw-appearance-none tw-rounded-none tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-placeholder-gray-500 tw-text-gray-900 tw-rounded-full focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 focus:tw-z-10 sm:tw-text-sm"
                placeholder="ConfirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="current-email"
                required
                className="tw-appearance-none tw-rounded-none tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-placeholder-gray-500 tw-text-gray-900 tw-rounded-full focus:tw-outline-none focus:tw-ring-indigo-500 focus:tw-border-indigo-500 focus:tw-z-10 sm:tw-text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="tw-flex tw-justify-center">
              <button
                type="submit"
                className="tw-group tw-relative  tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent  tw-font-medium tw-rounded-md tw-text-white tw-bg-black hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
              >
                <span className="tw-absolute tw-left-0 tw-inset-y-0 tw-flex tw-items-center tw-pl-3"></span>
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
