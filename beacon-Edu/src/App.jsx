import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import SubjectSelection from './components/SubjectSelection';
import StudentDashboard from './components/StudentDashboard';
import AdminLayout from './components/AdminLayout';
import CreateStudent from './components/CreateStudent';
import Subjects from './components/Subjects';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student" element={<StudentDashboard />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="create-student" element={<CreateStudent />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="subject-selection" element={<SubjectSelection />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
