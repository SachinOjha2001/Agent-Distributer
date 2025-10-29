import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddAgent from './components/AddAgent';
import UploadLists from './components/UploadLists';

function App() {
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  console.log("Token in App.jsx:", token);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/add-agent" element={isLoggedIn ? <AddAgent /> : <Navigate to="/login" />} />
      <Route path="/upload-lists" element={isLoggedIn ? <UploadLists /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
    </Routes>
  );
}

export default App;
