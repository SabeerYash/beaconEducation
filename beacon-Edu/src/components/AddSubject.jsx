import React, { useState } from 'react';

const AddSubject = ({ onAdd }) => {
  const [subjectName, setSubjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subjectName.trim()) {
      onAdd(subjectName);
      setSubjectName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-subject-form">
      <input
        type="text"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        placeholder="Enter subject name"
      />
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default AddSubject;