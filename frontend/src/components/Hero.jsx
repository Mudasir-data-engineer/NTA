// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        textAlign: 'center',
        background: '#042225ff',
        padding: '0 20px',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Welcome to NTA Agency
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        We build modern web solutions with React & Spring Boot
      </p>
      <button
        style={{
          padding: '10px 25px',
          fontSize: '1rem',
          backgroundColor: '#4f46e5',
          color: '#867b7bff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => alert('Call to action clicked!')}
      >
        Get Started
      </button>
    </section>
  );
}
