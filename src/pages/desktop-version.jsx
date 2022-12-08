import React from 'react';
import Logo from '../componentes/logo';
import '../css/desktop-version.css';

const DesktopVersion = () => {
  return (
    <div className='desktop-version-view'>
      <Logo />
      <p className='desktop-version-text'>Disponible solo para smartphones.</p>
    </div>
  );
}

export default DesktopVersion;