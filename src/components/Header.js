import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Avatar, Button } from 'antd';

import LogoTipo from '../assets/images/logo.svg';
import Logo from '../assets/images/curvips-logo.svg';

function Header({ logger }) {
  const avatar = 'LR';

  return (
    <header className='header'>
      {
        !logger && (
          <Link to='/'>
            <img className='header__logotipo' src={Logo} alt='Ir a home' />
            <img className='header__logo' src={LogoTipo} alt='Ir a home' />
          </Link>
        )
      }
      <menu className='header-menu'>
        {!logger ? (
          <>
            <NavLink exact className='header-menu__item' to='/'>CV</NavLink>
            <NavLink className='header-menu__item' to='/templates'>Plantillas</NavLink>
            <NavLink className='header-menu__item' to='/help'>Preguntas frecuentes</NavLink>
            <NavLink className='header-menu__item' to='/contact'>Contacto</NavLink>
            <NavLink className='header-menu__item' to='/about'>Acerca de</NavLink>
          </>
        ) : (
          <>
            <Button className='header-menu__item' type='primary' size='large'><Link to='/app'>Crea tu CV</Link></Button>
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
            <Link className='header-account__item' to='/'>Logout</Link>
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
