import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SubjectSelection.css';

const SubjectSelection = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const student = state?.student;

  const [subjects, setSubjects] = useState([
    { name: 'Mathematics', selected: false },
    { name: 'Science', selected: false },
    { name: 'History', selected: false },
    { name: 'English', selected: false },
    { name: 'Art', selected: false },
    { name: 'Music', selected: false },
  ]);

  useEffect(() => {
    if (!student) {
      navigate('/admin/create-student');
    }
  }, [student, navigate]);

  const handleCheckboxChange = (index) => {
    const newSubjects = [...subjects];
    newSubjects[index].selected = !newSubjects[index].selected;
    setSubjects(newSubjects);
  };

  const handleSubjectSelection = (e) => {
    e.preventDefault();
    console.log('Student:', student);
    console.log('Subjects:', subjects);
    navigate('/admin');
  };

  if (!student) {
    return null;
  }

  return (
    <div className="subject-selection-container">
      <div className="subject-selection-card">
        <h2 className="form-title">Subject Selection for {student.firstName} {student.lastName}</h2>
        <form onSubmit={handleSubjectSelection}>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <div key={index} className="subject-input-group">
                <input
                  type="checkbox"
                  checked={subject.selected}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label>{subject.name}</label>
              </div>
            ))}
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubjectSelection;
