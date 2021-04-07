import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      Panel de control
      <PlayCircleOutlined />
      <Link to='/dashboard'>Dashboard</Link>
    </div>
  );
};

export default Sidebar;
