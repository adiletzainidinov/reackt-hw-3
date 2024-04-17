import React from 'react';
import HeaderCss from '../components/Header.module.css';
import Thrivetalk from './header/Thrivetalk';
import Nav from './header/Nav';
import ContacktUsButton from './header/ContacktUsButton';

const Header = () => {
  return (
    <>
      <div className="header-papa">
      <header className={HeaderCss.header}>
        <Thrivetalk />
        <Nav />
        <ContacktUsButton />
      </header>
      </div>
    </>
  );
};

export default Header;
