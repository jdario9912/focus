import React from 'react';
import BienvenidaText from '../bienvenida/bienvenida-text';
import Logo from '../componentes/logo';
import '../css/bienvenida-page.css'

const Bienvenida = () => {
  return (
    <div className='bienvenida-page'>
      <Logo />
      <BienvenidaText />
      {/* <div className='btn-portada'>Fotógrafo</div> */}
      {/* <div className='btn-portada'>Espectador</div> */}
    </div>
  );
}

export default Bienvenida;
