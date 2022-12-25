import React from 'react';
import '../../css/button-navigation.css'
import BtnAgregar from './button-navigation/btn-agregar';
import BtnHome from './button-navigation/btn-home';
import BtnLupa from './button-navigation/btn-lupa';
import BtnNotificaciones from './button-navigation/btn-notificaciones';
import BtnProfile from './button-navigation/btn-profile';

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
        <BtnProfile />
      </div>
    </div>
  );
}

export default ButtonNavigation;
