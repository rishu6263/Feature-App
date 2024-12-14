import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Welcome to Doctor-User App</h1>
      <div className="mt-8 space-x-4">
        <Link to="/doctor" className="btn-primary">Doctor Login</Link>
        <Link to="/user" className="btn-secondary">User Login</Link>
      </div>
    </div>
  );
};

export default Home;
