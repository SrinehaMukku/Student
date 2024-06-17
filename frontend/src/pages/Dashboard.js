import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/');
  };

  const handleYearClick = (year) => {
    navigate('/home');
  };

  return (
    <div className="dashboard">
      <div className="logout">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="sidebar">
        <button onClick={() => handleYearClick('first-year')}>First Year</button>
        <button onClick={() => handleYearClick('second-year')}>Second Year</button>
        <button onClick={() => handleYearClick('third-year')}>Third Year</button>
        <button onClick={() => handleYearClick('fourth-year')}>Fourth Year</button>
      </div>
      <div className="content">
      </div>
    </div>
  );
};

export default Dashboard;
