import React from 'react';
import { Button } from 'antd';
import { HomeOutlined, StepForwardFilled } from '@ant-design/icons';
import logo from './logo.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button type='primary'>Soy un botón</Button>
        <Button>Soy un boton default</Button>
        <Button type='dashed'>Soy un boton default</Button>
        <br />
        <HomeOutlined />
        <Button type='primary' danger>Soy un Error</Button>
        <Button type='primary' icon={<StepForwardFilled />}>Soy un Error</Button>
      </header>
    </div>
  );
}

export default App;
