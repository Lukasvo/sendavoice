import React from 'react';

const ShadowIcon = ({ children, className, style }) => {
  return <div className={`shadow-icon ${className ? className : ''}`} style={style}>
    {children}
  </div>
};

export default ShadowIcon;
