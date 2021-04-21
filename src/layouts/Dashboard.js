import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = ({ children, title }) => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='dashboard-content'>
        <Header logger={true} />
        <div className='dashboard-content__child'>
          <h2 className='dashboard__title'>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
