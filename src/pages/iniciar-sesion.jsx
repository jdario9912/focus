import React from "react";
import BackArrow from "../componentes/back-arrow";
import '../css/iniciar-sesion-page.css';

const IniciarSesion = () => {

  return (
    <div className="iniciar-sesion-page">
      <BackArrow href={'/fotografo'} />
      <h1 className="text-xl">Esta pagina esta en desarrollo</h1>
    </div>
  );
}

export default IniciarSesion;

