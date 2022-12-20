import React, { useEffect } from 'react';
import Publicacion from './feed/publicacion';
import '../../css/feed.css';
import { CONST } from '../../const/const';

const Feed = () => {
  useEffect(() => {
    fetch(`${CONST.apiJsonServer}/usuarios`)
      .then(res => res.json())
      .then(data => console.log(data[0]))
      .catch(e => console.log(e))
  }, []);
  return (
    <div className='feed'>
      <Publicacion />
    </div>
  );
}

export default Feed;
