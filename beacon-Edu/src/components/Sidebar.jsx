import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Admin</h1>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/admin" end>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/admin/create-student">Students</NavLink>
        </li>
        <li>
          <NavLink to="/admin/subjects">Subjects</NavLink>
        </li>
        <li>
          <NavLink to="/admin/subject-selection">Subject Selection</NavLink>
        </li>
      </ul>
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
