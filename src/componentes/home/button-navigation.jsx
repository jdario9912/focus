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
      <div className='box-par-btn box-par-btn-l'>
        <BtnHome />
        <BtnLupa />
      </div>
      <div className='mas-under-mas'>
        <BtnAgregar />
        <div className='under-mas'>
          <div className='box-under-mas'></div>
        </div>
      </div>
      <div className='box-par-btn box-par-btn-r'>
        <BtnNotificaciones />
        <BtnPerfil />
      </div>
    </div>
  );
}

export default ButtonNavigation;
