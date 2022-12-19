import React from 'react';
import '../../css/button-navigation-comp.css'
import BtnAgregar from './button-navigation/btn-agregar';
import BtnHome from './button-navigation/btn-home';
import BtnLupa from './button-navigation/btn-lupa';
import BtnNotificaciones from './button-navigation/btn-notificaciones';
import BtnPerfil from './button-navigation/btn-perfil';

const ButtonNavigation = () => {
  return (
    <div className='button-navigation'>
      <div className="container-buttons">
        <BtnHome />
        <BtnLupa />
        <div className="container-mas">
          <BtnAgregar />
        </div>
        <BtnNotificaciones />
        <BtnPerfil />
      </div>
    </div>
  );
}

export default ButtonNavigation;
