import { useAuth } from '../../../contexts/AuthContext';
import DropdownCart from './DropdownCart';
import DropdownUser from './DropdownUser';
import Logo from './Logo';
import Menu from './Menu';
import MenuMd from './MenuMd';

function Header() {
  const { user } = useAuth();

  return (
    <div className="tw-z-10 tw-sticky tw-top-0 tw-h-20 tw-bg-white">
      <div className=" tw-h-20  tw-flex tw-justify-end md:tw-justify-between tw-items-center tw-mx-auto  tw-px-4 sm:tw-px-6 lg:tw-max-w-7xl lg:tw-px-8 ">
        <Logo />
        <div className="tw-flex tw-justify-between tw-gap-x-6 tw-items-center">
          <MenuMd />
          <Menu />
          <div className="tw-flex">
            {user && <DropdownUser />}
            {user && <DropdownCart />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
