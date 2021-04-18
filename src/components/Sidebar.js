import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { AuditOutlined, UserOutlined, QuestionOutlined, SnippetsOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logotipo from '../assets/images/curvips-logo.svg';

function Sidebar() {
  const [colllapse, setCollapse] = useState(false);
  return (
    <Menu className='sidebar' theme='dark' siderCollapsed={colllapse}>
      <Button ghost className='sidebar__menu' icon={!colllapse ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} onClick={() => setCollapse(!colllapse)} />
      <div className='sidebar-head'>
        <img className='sidebar-head__icon' src={Logotipo} alt='Logotipo de CurVips' />
        {!colllapse && 'Dashboard'}
      </div>
      <div className='sidebar-options'>
        <NavLink exact activeClassName='active-sidebar' to='/dashboard' className='sidebar-options__link'>
          <AuditOutlined className='sidebar-options__icon' />
          {!colllapse && 'Mis Currículos'}
        </NavLink>
        <NavLink activeClassName='active-sidebar' to='/dashboard/account' className='sidebar-options__link'>
          <UserOutlined className='sidebar-options__icon' />
          {!colllapse && 'Gestionar Cuenta'}
        </NavLink>
        <NavLink activeClassName='active-sidebar' to='/dashboard/templates' className='sidebar-options__link'>
          <SnippetsOutlined className='sidebar-options__icon' />
          {!colllapse && 'Plantillas'}
        </NavLink>
        <NavLink activeClassName='active-sidebar' to='/dashboard/help' className='sidebar-options__link'>
          <QuestionOutlined className='sidebar-options__icon' />
          {!colllapse && 'Preguntas Frecuentes'}
        </NavLink>
      </div>
    </Menu>
  );
};

export default Sidebar;
