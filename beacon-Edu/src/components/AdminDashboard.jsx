import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Students</h3>
          <p>1,234</p>
        </div>
        <div className="card">
          <h3>New Admissions</h3>
          <p>56</p>
        </div>
        <div className="card">
          <h3>Courses</h3>
          <p>25</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
