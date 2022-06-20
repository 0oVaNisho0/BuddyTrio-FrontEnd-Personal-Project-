import logo from '../../../assets/images/logo.jpg';

function Logo() {
  return (
    <img
      alt="logo"
      width="150"
      src={logo}
      className="tw-hidden md:tw-block md:tw-h-20  "
    />
  );
}

export default Logo;
