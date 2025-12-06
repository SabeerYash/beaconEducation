import React from 'react';
import { useLocation } from 'react-router-dom';

const StudentDashboard = () => {
  const location = useLocation();
  const studentData = location.state?.student;

  if (!studentData) {
    return <div>No student data available. Please log in.</div>;
  }

  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>
      <div className="student-info">
        <p><strong>Name:</strong> {studentData.firstName} {studentData.lastName}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Class:</strong> {studentData.className}</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
