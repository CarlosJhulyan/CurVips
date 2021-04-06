import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

const NotFound = (props) => (
  <div className='container'>
    <Result status='404' title='404' subTitle='CurVips siente que no haya encontrado la página que buscaba. Vuelva al inicio por favor.' extra={<Button type='primary'><Link to='/'>Ir al Inicio</Link></Button>} />
  </div>
);

export default NotFound;
