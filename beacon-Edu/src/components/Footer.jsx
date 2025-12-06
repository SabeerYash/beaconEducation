import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} @beaconeducation2025.com
    </footer>
  );
};

export default Footer;
