import React, { useContext } from 'react';
import { FeedContext } from '../../feed';

const Contenido = () => {
  const { foto, comentarios } = useContext(FeedContext);
  return (
    <div className='publicacion-contenido'>
      <img src={ foto } alt="" />
      {
        comentarios.map(comentario => <p>{ comentario.texto }</p>)
      }
    </div>
  );
}

export default Contenido;
