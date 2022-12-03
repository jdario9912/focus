import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DesktopVersion from './pages/desktop-version';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSingup from './pages/login-singup';
import IniciarSesion from './pages/iniciar-sesion';

const movile = window.innerWidth < 992;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {
      movile ? 
        <Routes>
          <Route path='/' element={ <App /> } />
          <Route path='/fotografo' element={ <LoginSingup /> } />
          <Route path='/espectador' element={ <LoginSingup /> } />
          <Route path='/social-login' element={ <IniciarSesion /> } />
        </Routes> :
        <DesktopVersion />
    }
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
