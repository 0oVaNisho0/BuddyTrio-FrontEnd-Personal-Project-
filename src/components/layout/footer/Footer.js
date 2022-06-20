import visaLogo from '../../../assets/images/visaLogo.png';
import masterCardLogo from '../../../assets/images/masterCardLogo.png';
import flashLogo from '../../../assets/images/flashLogo.webp';
import kerryLogo from '../../../assets/images/kerryLogo.png';
import thaiPostLogo from '../../../assets/images/thaiPostLogo.jpeg';

function Footer() {
  const followUs = [
    { title: 'Facebook', logo: 'fa-brands fa-facebook tw-text-lg' },
    { title: 'Instagram', logo: 'fa-brands fa-instagram tw-text-lg' },
    { title: 'Line', logo: 'fa-brands fa-line tw-text-lg' },
    { title: 'LinkedIn', logo: 'fa-brands fa-linkedin tw-text-lg' },
  ];
  return (
    <div className="tw-h-full tw-bg-slate-100 tw-flex tw-flex-wrap tw-justify-center tw-gap-28 tw-py-8 tw-text-light-brown ">
      <div>
        <div className="tw-text-xl tw-font-semibold">Customoer Care</div>

        <ul className="tw-pt-5">
          <li className="tw-pt-2">Help center</li>
          <li className="tw-pt-2">How to buy</li>
          <li className="tw-pt-2">How to return</li>
          <li className="tw-pt-2">Contact us</li>
        </ul>
      </div>
      <div>
        <div className="tw-text-xl tw-font-semibold">BuddyTrio</div>

        <ul className="tw-pt-5">
          <li className="tw-pt-2">About us</li>
          <li className="tw-pt-2">Terms & Conditions</li>
          <li className="tw-pt-2">Privacy Policy</li>
          <li className="tw-pt-2">Security</li>
          <li className="tw-pt-2">Best Seller</li>
        </ul>
      </div>
      <div>
        <div className="tw-text-xl tw-font-semibold">Payment Methods</div>

        <div className="tw-flex tw-justify-start tw-gap-5 tw-pt-5">
          <img src={visaLogo} alt="visaLogo" className="tw-max-h-10"></img>
          <img
            src={masterCardLogo}
            alt="masterCardLogo"
            className="tw-max-h-10"
          ></img>
        </div>
      </div>
      <div>
        <div className="tw-text-xl tw-font-semibold">Delivery Services</div>

        <div className="tw-flex tw-justify-start tw-gap-5 tw-pt-5">
          <img src={flashLogo} alt="flashLogo" className="tw-max-h-10"></img>
          <img src={kerryLogo} alt="kerryLogo" className="tw-max-h-10"></img>
          <img
            src={thaiPostLogo}
            alt="thaiPostLogo"
            className="tw-max-h-10"
          ></img>
        </div>
      </div>
      <div>
        <div className="tw-text-xl tw-font-semibold">Follow Us</div>
        <ul className="tw-pt-5">
          {followUs.map((el, idx) => (
            <li key={idx} className="tw-pt-2">
              <i className={el.logo}></i>
              <span>{el.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
