import React from 'react';
import SocialLogin from "react-social-login";

const BtnGoogle = ({ children, triggerLogin, ...props }) => {
  return (
    <>
      <button onClick={ triggerLogin } { ...props } className='z-10'>
        { children }
      </button>
    </>
  );
}

export default SocialLogin(BtnGoogle);
