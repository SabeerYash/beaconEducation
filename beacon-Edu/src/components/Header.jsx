import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would typically clear any authentication tokens or session data
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
