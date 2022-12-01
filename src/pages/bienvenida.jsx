import React from 'react';
import BienvenidaText from '../bienvenida/bienvenida-text';
import BtnBienvenida from '../bienvenida/btn-bienvenida';
import Logo from '../componentes/logo';
import '../css/bienvenida-page.css'

const Bienvenida = () => {
  return (
    <div className='bienvenida-page'>
      <div className='logo-container-bienvenida'><Logo /></div>
      <BienvenidaText />
      <div className='btn-bienvenida-container'>
        <BtnBienvenida texto='Fotógrafo' href={'#'} />
        <BtnBienvenida texto='Espectador' href={'#'} />
      </div>
    </div>
  );
}

export default Bienvenida;