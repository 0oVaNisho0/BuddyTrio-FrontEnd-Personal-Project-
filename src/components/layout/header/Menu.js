import { Link } from 'react-router-dom';

function Menu() {
  const menus = [
    { title: 'LOGIN', link: '/login' },
    { title: 'SIGNUP', link: '/register' },
  ];

  return (
    <>
      {menus.map((el, idx) => (
        <span
          key={idx}
          className="md:tw-hidden tw-text-xl tw-text-light-brown tw-block "
        >
          <Link to={el.link}>{el.title}</Link>
        </span>
      ))}
    </>
  );
}

export default Menu;
