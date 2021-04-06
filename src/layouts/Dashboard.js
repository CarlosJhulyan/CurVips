import React from 'react';

import Header from '../components/Header';

const Dashboard = ({ children }) => {
  return (
    <>
      <Header logger={true} />
      <div>
        aside
      </div>
      <div>{children}</div>
    </>
  );
};

export default Dashboard;
