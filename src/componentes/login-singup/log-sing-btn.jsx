import React from 'react';
import '../../css/login-singup-page.css';

const LogSingBtn = ({ texto, href }) => {
  return (
    <a href={ href } className='btn-log-sing'>
      { texto }
    </a>
  );
}

export default LogSingBtn;
