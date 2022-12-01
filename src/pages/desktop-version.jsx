import React from 'react';
import Logo from '../componentes/logo';
import '../css/desktop-version.css';

const DesktopVersion = () => {
  return (
    <div className='desktop-version-view'>
      <div className='logo-container-desktop'><Logo /></div>
      <p>Disponible solo para <i>smatphones</i>.</p>
    </div>
  );
}

export default DesktopVersion;
