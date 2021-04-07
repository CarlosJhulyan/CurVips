import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = ({ children }) => {
  return (
    <>
      <Header logger={true} />
      <div className='daskboard'>
        <Sidebar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Dashboard;
