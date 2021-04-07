import React from 'react';
import { Link } from 'react-router-dom';
import { AuditOutlined, UserOutlined, QuestionOutlined } from '@ant-design/icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>PANEL DE CONTROL</h2>
      <div className='sidebar-options'>
        <Link to='/dashboard' className='sidebar-options__link'>
          <AuditOutlined className='sidebar-options__icon' />
          Currículos
        </Link>
        <Link to='/dashboard/account' className='sidebar-options__link'>
          <UserOutlined className='sidebar-options__icon' />
          Cuenta
        </Link>
        <Link to='/dashboard/help' className='sidebar-options__link'>
          <QuestionOutlined className='sidebar-options__icon' />
          Preguntas frecuentes
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;
