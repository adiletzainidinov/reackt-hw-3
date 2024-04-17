import HeaderCss from '../../components/Header.module.css';

const Nav = () => {
  return (
    <>
      <ul className={HeaderCss.nav}>
        <li className={HeaderCss.home}>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
