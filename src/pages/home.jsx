import React from 'react';
import ButtonNavigation from '../componentes/home/button-navigation';
import Cards from '../componentes/home/cards';
import Destacados from '../componentes/home/destacados';
import '../css/home-page.css';

const Home = () => {
  return (
    <div>
      <Destacados />
      <Cards />
      <ButtonNavigation />
    </div>
  );
}

export default Home;