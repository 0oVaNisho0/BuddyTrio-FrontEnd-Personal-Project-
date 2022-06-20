import logoIcon from '../../../assets/logoIcon.jpeg';
import {
  HomeIcon,
  UserIcon,
  // ShoppingCartIcon,
  ThumbUpIcon,
  SearchCircleIcon,
} from '@heroicons/react/solid';

function Sidebar({ handleNavOpen, open }) {
  const menus = [
    { title: 'HOME', icon: <HomeIcon className="tw-h-10 tw-w-10 " /> },
    { title: 'HOTSALE', icon: <ThumbUpIcon className="tw-h-10 tw-w-10 " /> },
    {
      title: 'SEARCH',
      icon: <SearchCircleIcon className="tw-h-10 tw-w-10 " />,
    },
    { title: 'LOGIN', icon: <UserIcon className="tw-h-10 tw-w-10 " /> },
    // { title: 'Cart', icon: <ShoppingCartIcon className="tw-h-10 tw-w-10 " /> },
  ];
  return (
    <div
      className={`${
        open ? 'tw-w-52' : 'tw-w-20'
      } tw-h-screen tw-sticky tw-top-0 tw-bg-white tw-p-5 tw-pt-5 tw-dutation-300 md:tw-hidden`}
    >
      <div className="tw-flex tw-gap-x-4 tw-items-center">
        <img
          src={logoIcon}
          alt="Logo"
          className={`tw-cursor-pointer tw-max-h-10 tw-duration-500 ${
            open && 'tw-rotate-[360deg]'
          }`}
          onClick={handleNavOpen}
        />
        <h1
          className={`tw-text-dark tw-origin-left tw-font-medium tw-text-xl tw-duration-200 ${
            !open && 'tw-scale-0'
          }`}
        >
          WorldPets
        </h1>
      </div>
      <ul className="tw-pt-4">
        {menus.map((el, idx) => (
          <li
            key={idx}
            className={`tw-flex tw-rounded-md tw-cursor-pointer hover:tw-bg-light-white  tw-text-xl tw-items-center tw-gap-x-4 tw-mt-5`}
          >
            {el.icon}
            <span
              className={`${
                !open && 'tw-hidden'
              } tw-origin-left tw-duration-200`}
            >
              {el.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
