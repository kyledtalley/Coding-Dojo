import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      fontSize: '20px',
    }}>
      <h1 style={{ fontSize: '2.5em' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.5em', fontStyle: 'italic', fontFamily: 'palotino' }}>Not all those who wander are lost</p>
      <p style={{ fontSize: '1.0em', color: 'black', opacity: '.8', fontFamily: 'palotino' }}>J.R.R. Tolkien</p>
      <Link to="/" style={{ fontSize: '1.5em' }}>Go Home</Link>
    </div>
  );
};

export default NotFound;
