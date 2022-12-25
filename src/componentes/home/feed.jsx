import React, { useEffect, createContext, useState } from 'react';
import Publicacion from './feed/publicacion';
import '../../css/feed.css';
import { CONST } from '../../const/const';
const { apiJsonServer, usuarios } = CONST;
export const FeedContext = createContext();

const Feed = () => {
  const [avatar, setAvatar] = useState(''),
        [nombre, setNombre] = useState(''),
        [profesion, setProfesion] = useState(''),
        [foto, setFoto] = useState(''),
        [comentarios, setComentarios] = useState([])
  ;

  useEffect(() => {
    fetch(apiJsonServer + usuarios)
      .then(res => res.json())
      .then(data => {
        setNombre(data[0].infoPersonal.nombre);
        setProfesion(data[0].profesion);
        setAvatar(data[0].avatar);
        setFoto(data[0].publicaciones[0].src);
        setComentarios(data[0].publicaciones[0].comentarios)
        // console.log(data[0].publicaciones[0].comentarios);
      })
      .catch(e => console.log(e))
    ;
  }, []);

  return (
    <div className='feed'>
      <FeedContext.Provider value={ {nombre, profesion, avatar, foto, comentarios} }>
        <Publicacion />
      </FeedContext.Provider>
    </div>
  )
}



export default Feed;
