import React, { useContext } from 'react';
import { FeedContext } from '../../feed';

const Encabezado = () => {
  const { nombre, profesion, avatar } = useContext(FeedContext);
  
  return (
    <div className='encabezado-container'>
      <img src={ avatar } alt="avatar fotografo" className="encabezado-avatar" />
      <div className="encabezado-textos">
        <p className="encabezado-nombre">{ nombre }</p>
        <p className="encabezado-profesion">{ profesion }</p>
      </div>
    </div>
  );
}

export default Encabezado;
