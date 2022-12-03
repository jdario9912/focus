import React from 'react';
import BienvenidaText from '../componentes/bienvenida/bienvenida-text';
import BtnBienvenida from '../componentes/bienvenida/bienvenida-btn';
import Logo from '../componentes/logo';
import '../css/bienvenida-page.css'

const Bienvenida = () => {

  return (
    <div className='bienvenida-page'>
      <div className='logo-container-bienvenida'><Logo /></div>
      <BienvenidaText />
      <div className='btn-bienvenida-container'>
        <BtnBienvenida texto='Fotógrafo' href={'/fotografo'} />
        <BtnBienvenida texto='Espectador' href={'/espectador'} />
        {/* <button handleDisplay={ocultarPagina}>Ocultar pagina</button> */}
      </div>
    </div>
  );
}

export default Bienvenida;