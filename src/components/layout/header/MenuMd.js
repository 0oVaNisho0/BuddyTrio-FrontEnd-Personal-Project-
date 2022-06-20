import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

function MenuMd() {
  const { user } = useAuth();

  const menusMdActive = [
    { title: 'HOME', link: '/' },
    { title: 'SEARCH', link: '/search' },
  ];

  const menusMdInActive = [
    { title: 'HOME', link: '/' },
    { title: 'SEARCH', link: '/search' },
    { title: 'LOGIN', link: '/login' },
    { title: 'SIGNUP', link: '/register' },
  ];
  return (
    <>
      {(user ? menusMdActive : menusMdInActive).map((el, idx) => (
        <span
          key={idx}
          className="tw-hidden md:tw-text-xl md:tw-text-light-brown md:tw-block "
        >
          <Link to={el.link}>{el.title}</Link>
        </span>
      ))}
    </>
  );
}

export default MenuMd;
