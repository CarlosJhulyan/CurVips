import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button } from 'antd';

import Logo from '../logo.svg';

function Header({ logger }) {
  const avatar = 'LR';

  return (
    <header className='header'>
      <Link className='header__logo' to='/'>
        <img src={Logo} alt='Ir a home' />
      </Link>
      <menu className='header-menu'>
        {!logger ? (
          <>
            <Link className='header-menu__item' to='/'>CV</Link>
            <Link className='header-menu__item' to='/templates'>Plantillas</Link>
            <Link className='header-menu__item' to='/help'>Preguntas Frecuentes</Link>
            <Link className='header-menu__item' to='/contact'>Contacto</Link>
            <Link className='header-menu__item' to='/about'>Acerca de</Link>
          </>
        ) : (
          <>
            <Link className='header-menu__item' to='/app'>Crea tu CV</Link>
            <Link className='header-menu__item' to='/templates'>Plantillas</Link>
            <Link className='header-menu__item' to='/dashboard'>dashboard</Link>
          </>
        )}
      </menu>
      <menu className='header-account'>
        {!logger ? (
          <>
            <Link className='header-account__item' to='/login'>Ingresar</Link>
            <Button type='primary' size='large' className='header-account__item'>
              <Link to='/register'>Regístrate</Link>
            </Button>
          </>
        ) : (
          <>
            <Link className='header-account__item' to='/'>Log Out</Link>
            <Link className='header-account__item' to='/dashboard/account'>
              <Avatar>{avatar}</Avatar>
            </Link>
          </>
        )}
      </menu>
    </header>
  );
}

export default Header;
