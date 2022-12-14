import React from 'react';
import BackArrow from '../componentes/back-arrow';
import LogSingBtn from '../componentes/login-singup/log-sing-btn';
import LogSingText from '../componentes/login-singup/log-sing-text';
import Logo from '../componentes/logo';
import '../css/login-singup-page.css';

const LoginSingup = () => {
  return (
    <div className='login-signup-page'>
      <BackArrow href={'/'}/>
      <div className='logo-container-login-singup'>
        <Logo />
      </div>
      <LogSingText />
      <div className='btn-login-singup-container'>
        <LogSingBtn texto='Iniciar sesión' href='auth' />
        <LogSingBtn texto='Registrarte' href='iniciar-sesion' />
      </div>
    </div>
  );
}

export default LoginSingup;
