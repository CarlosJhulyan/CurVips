import React from 'react';
import { Avatar, Button } from 'antd';

import Logo from '../logo.svg';

function Header({ logger }) {
  const avatar = 'LR';

  return (
    <header className='header'>
      <a className='header__logo' href='/'>
        <img src={Logo} alt='Ir a home' />
      </a>
      <menu className='header-menu'>
        {!logger ? (
          <>
            <a className='header-menu__item' href='/'>CV</a>
            <a className='header-menu__item' href='/templates'>Plantillas</a>
            <a className='header-menu__item' href='/contact'>Contacto</a>
            <a className='header-menu__item' href='/about'>Acerca de</a>
          </>
        ) : (
          <>
            <a className='header-menu__item' href='/app'>Crea tu CV</a>
            <a className='header-menu__item' href='/templates'>Plantillas</a>
            <a className='header-menu__item' href='/dashboard'>dashboard</a>
          </>
        )}
      </menu>
      <menu className='header-account'>
        {!logger ? (
          <>
            <a className='header-account__item' href='/login'>Ingresar</a>
            <Button type='primary' className='header-account__item'>
              <a href='/register'>Regístrate</a>
            </Button>
          </>
        ) : (
          <>
            <a className='header-account__item' href='/'>Log Out</a>
            <a className='header-account__item' href='/dashboard/account'>
              <Avatar>{avatar}</Avatar>
            </a>
          </>
        )}
      </menu>
    </header>
  );
}

export default Header;
