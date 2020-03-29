import React from 'react';
import ShadowIcon from './ShadowIcon';
import logo from "../img/logo.svg"
import { Link } from 'react-router-dom';

const Logo = () => {


  return <Link to="/" className="logo">
    <ShadowIcon style={{ marginBottom: '.2em' }}>
      <img src={logo} alt="Sendavoice logo" />
    </ShadowIcon>
    <span>Sendavoice</span>
  </Link>
};

export default Logo;
