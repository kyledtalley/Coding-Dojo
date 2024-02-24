// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
