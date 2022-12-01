import React from 'react';

const BtnBienvenida = ({ texto, href }) => {
  return (
    <a href={ href } className='btn-bienvenida'>
      { texto }
    </a>
  );
}

export default BtnBienvenida;
