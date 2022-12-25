import React, { useContext } from 'react';
import { FeedContext } from '../../feed';
import { v4 as uuidv4 } from 'uuid';

const Contenido = () => {
  const { foto, comentarios } = useContext(FeedContext);
  return (
    <div className='publicacion-contenido'>
      <img src={ foto } alt="" />
      {
        comentarios.map(comentario => <p key={ uuidv4()}>{ comentario.texto }</p>)
      }
    </div>
  );
}

export default Contenido;
