import React from 'react';
import ButtonNavigation from '../componentes/home/button-navigation';
import Feed from '../componentes/home/feed';
import Destacados from '../componentes/home/destacados';
import '../css/home-page.css';

const Home = () => {
  return (
    <div>
      <Destacados />
      <div className="separador"></div>
      <Feed />
      <ButtonNavigation />
    </div>
  );
}

export default Home;