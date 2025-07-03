import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome{user ? `, ${user.name}` : ''}! You are now logged in.</p>
      <p className="mt-4">This is your dashboard. You can add more features here.</p>
    </div>
  );
};

export default Dashboard; 