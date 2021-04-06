import React from 'react';
import { Avatar } from 'antd';

import Logo from '../logo.svg';

function Header({ logger }) {
  const avatar = 'CM';

  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={Logo} alt='Ir a home' width={100} />
      </div>
      <menu className='header__menu'>
        {!logger ? (
          <>
            <a href='https://'>CV</a>
            <a href='https://'>Plantillas</a>
            <a href='https://'>Contacto</a>
            <a href='https://'>Acerca de</a>
          </>
        ) : (
          <>
            <a href='https://'>Crea tu CV</a>
            <a href='https://'>Plantillas</a>
            <a href='https://'>dashboard</a>
          </>
        )}
      </menu>
      <menu className='header__account'>
        {!logger ? (
          <>
            <a href='https://'>Sign In</a>
            <a href='https://'>Sign Up</a>
          </>
        ) : (
          <>
            <a href='https://'>Log Out</a>
            <a href='https:/'>
              <Avatar>{avatar}</Avatar>
            </a>
          </>
        )}
      </menu>
    </header>
  );
}

export default Header;
