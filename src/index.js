import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopVersion from './pages/desktop-version';
import LoginSingup from './pages/login-singup';
import IniciarSesion from './pages/iniciar-sesion';
import Home from './pages/home';
import Profile from './pages/profile';

const movile = window.innerWidth < 480;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {
      movile ? 
        <Routes>
          <Route path='/' element={ <App /> } />
          <Route path='/fotografo' element={ <LoginSingup /> } />
          <Route path='/espectador' element={ <LoginSingup /> } />
          <Route path='/iniciar-sesion' element={ <IniciarSesion /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/profile' element={ <Profile /> } />
        </Routes> 
      :
        <DesktopVersion />
    }
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
