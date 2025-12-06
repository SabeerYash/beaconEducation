import React, { useState } from 'react';
import AddSubject from './AddSubject';
import './Subjects.css';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);

  const handleAddSubject = (subjectName) => {
    setSubjects([...subjects, { id: Date.now(), name: subjectName }]);
  };

  const handleDeleteSubject = (subjectId) => {
    setSubjects(subjects.filter(subject => subject.id !== subjectId));
  };

  return (
    <div className="subjects-container">
      <div className="subjects-header">
        <h2>Subjects</h2>
      </div>
      <AddSubject onAdd={handleAddSubject} />
      <div className="subjects-list">
        {subjects.map(subject => (
          <div key={subject.id} className="subject-item">
            <span className="subject-name">{subject.name}</span>
            <button 
              onClick={() => handleDeleteSubject(subject.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
