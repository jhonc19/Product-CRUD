import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="text-primary text-lg">{`Jhon Choque ${new Date().getFullYear()} © All rights reserved`}</h1>
    </div>
  );
};

export default Footer;
