import React from 'react';
import { BsArrowLeft } from "react-icons/bs";

const BackArrow = ({ href }) => {
  return (
    <a href={ href } className='back-arrow-container'>
      <BsArrowLeft className='back-arrow'/>
    </a>
  );
}

export default BackArrow;
