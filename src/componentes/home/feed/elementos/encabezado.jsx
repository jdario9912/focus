import React from 'react';
import avatar1 from '../../../../img/temporales/feed/avatars/ph2.JPG';

const Encabezado = () => {
  return (
    <div className='encabezado-container'>
      <img src={ avatar1 } alt="avatar fotografo" className="encabezado-avatar" />
      <div className="encabezado-textos">
        <p className="encabezado-nombre">Marcelo Martínez</p>
        <p className="encabezado-profesion">PH profesional</p>
      </div>
    </div>
  );
}

export default Encabezado;
