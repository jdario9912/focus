import React from "react";
import BtnGoogle from "../componentes/iniciar-sesion/btn-google";
import '../css/iniciar-sesion-page.css';

const IniciarSesion = () => {

  const handleSocialLogin = (user) => {
    console.log(user);
  };
  
  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  return (
    <div className="iniciar-sesion-page">
      <BtnGoogle
        provider='google'
        appId="681807040367-qte2c0kodbqi2e00tjccqiprvqd48ui1.apps.googleusercontent.com"
        data-login_uri='http://localhost:3000/'
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Continuar con Google
      </BtnGoogle>
    </div>
  );
}

export default IniciarSesion;

