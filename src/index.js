import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DesktopVersion from './pages/desktop-version';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSingup from './pages/login-singup';
import IniciarSesion from './pages/iniciar-sesion';
import Home from './pages/home';
import { CONST } from './const/const';
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react';
import ThirdPartyEmailPassword, { Google } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
 appInfo: {
   appName: "FOCUS",
   apiDomain: CONST.urlApi,
   websiteDomain: CONST.urlWeb,
 },
 recipeList: [
   ThirdPartyEmailPassword.init({
     signInAndUpFeature: {
       providers: [
         Google.init(),
       ],
     },
   }),
   Session.init(),
 ],
});

const movile = window.innerWidth < 992;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {
      movile ? 
        <Routes>
          <Route path='/' element={ <App /> } />
          {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
          <Route path='/fotografo' element={ <LoginSingup /> } />
          <Route path='/espectador' element={ <LoginSingup /> } />
          <Route path='/iniciar-sesion' element={ <IniciarSesion /> } />
          <Route path='/home' element={ <Home /> } />
        </Routes> :
        <DesktopVersion />
    }
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
