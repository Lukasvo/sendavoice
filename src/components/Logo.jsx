import React from 'react';
import ShadowIcon from './ShadowIcon';
import logo from "../img/logo.svg"

const Logo = () => {


  return <div className="logo">
    <ShadowIcon style={{ marginBottom: '.2em' }}>
      <img src={logo} alt="Sendavoice logo" />
    </ShadowIcon>
    <span>Sendavoice</span>
  </div>
};

export default Logo;
