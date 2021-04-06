import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Landing = ({ children }) => {
  return (
    <>
      <Header logger={false} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Landing;
