// UNA PUBLICACION ES EL POSTEO DE UNA SOLA FOTO
import React from 'react';
import Contenido from './elementos/contenido';
import Encabezado from './elementos/encabezado';

const Publicacion = () => {
  return (
    <div className='feed-publicacion'> 
      <Encabezado />
      <Contenido />
    </div>
  );
}

export default Publicacion;
