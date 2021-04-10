import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuditOutlined, UserOutlined, QuestionOutlined, SnippetsOutlined } from '@ant-design/icons';
import Logotipo from '../assets/images/curvips-logo.svg';
import Logo from '../assets/images/logo.svg';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-head'>
        <img className='sidebar-head__icon' src={Logotipo} alt='Logotipo de CurVips' />
        <img className='sidebar-head__title' src={Logo} alt='Logo de Curvips' />
      </div>
      <div className='sidebar-options'>
        <NavLink exact activeClassName='active-sidebar' to='/dashboard' className='sidebar-options__link'>
          <AuditOutlined className='sidebar-options__icon' />
          Mis Currículos
        </NavLink>
        <NavLink activeClassName='active-sidebar' to='/dashboard/account' className='sidebar-options__link'>
          <UserOutlined className='sidebar-options__icon' />
          Gestionar Cuenta
        </NavLink>
        <NavLink activeClassName='active-sidebar' to='/dashboard/templates' className='sidebar-options__link'>
          <SnippetsOutlined className='sidebar-options__icon' />
          Plantillas
        </NavLink>
        <NavLink activeClassName='active-sidebar' to='/dashboard/help' className='sidebar-options__link'>
          <QuestionOutlined className='sidebar-options__icon' />
          Preguntas Frecuentes
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
