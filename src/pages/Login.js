import React from 'react';

const Login = () => (
  <div id='panelLogin'>
    <h1 className='let title1'>curvips</h1>
    <div id='cuad'>
      <p id='user-text' className='text let'>CORREO/USUARIO</p>
      <input id='user' type='email' className='inputs' />
      <p id='password-text' className='text let'>CONTRASEÑA</p>
      <input id='password' type='password' className='inputs' />
      <br />
      <p className='let'>
        <input type='checkbox' className='' />
        Recordar mi usuario y contraseña
      </p>
      <button type='button' className='but let-buttom'>INGRESAR</button>
      <div className='parte-register'>
        <p className='let'>
          ¿no tienes una cuenta?
          <a href='Register' className=''>Registrate</a>
        </p>
      </div>
    </div>
  </div>
);

export default Login;
