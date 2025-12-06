import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateStudent.css';

const CreateStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    mobileNo: '',
    email: '',
    password: '',
    dob: '',
    institution: '',
    className: '',
    parentName: '',
    parentPhone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleCreateStudent = (e) => {
    e.preventDefault();
    navigate('/admin/subject-selection', { state: { student } });
  };

  return (
    <div className="create-student-container">
      <div className="create-student-card">
        <h2 className="form-title">Create Student</h2>
        <form onSubmit={handleCreateStudent}>
          <div className="row">
            <div className="col-3">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={student.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-3">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={student.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-3">
              <label>Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                value={student.mobileNo}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={student.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={student.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-3">
              <label>DOB</label>
              <input
                type="date"
                name="dob"
                value={student.dob}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label>Academic or Institution</label>
              <input
                type="text"
                name="institution"
                value={student.institution}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-3">
              <label>Class</label>
              <input
                type="text"
                name="className"
                value={student.className}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-3">
              <label>Parent Name</label>
              <input
                type="text"
                name="parentName"
                value={student.parentName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label>Parent Phone</label>
              <input
                type="text"
                name="parentPhone"
                value={student.parentPhone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-3">
              <label>Address</label>
              <textarea
                name="address"
                value={student.address}
                onChange={handleInputChange}
                rows="4"
                required
              />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="next-btn">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;