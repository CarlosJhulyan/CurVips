import React from 'react';

const Register = () => (
  <div id='panel'>
    <h1 className='let title1'>curvips</h1>
    <div id='cuad'>
      <p id='user-text' className='text let'>USUARIO</p>
      <input id='user' type='email' className='inputs' />
      <p id='user-text' className='text let'>CORREO</p>
      <input id='user' type='email' className='inputs' />
      <p id='password-text' className='text let'>CONTRASEÑA</p>
      <input id='password' type='password' className='inputs' />
      <br />
      <p className='let vol'>
        <input type='checkbox' />
        Aceptar los
        <a href='https://www.youtube.com'>Terminos de servicio</a>
      </p>
      <button type='button' className='but let-buttom'>REGISTRARSE</button>
      <div className='parte-register2'>
        <p className='let'>
          ¿ya tienes una cuenta?
          <a href='Login' className=''>Ingresa aqui</a>
        </p>
      </div>
    </div>
  </div>
);

export default Register;
