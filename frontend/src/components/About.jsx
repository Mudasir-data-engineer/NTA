// src/components/About.jsx
import React from 'react';

export default function About() {
  const services = [
    {
      title: 'Web Development',
      desc: 'Full-stack web apps with React on the frontend and Spring Boot on the backend — scalable, testable, and maintainable.'
    },
    {
      title: 'UI / UX Design',
      desc: 'User-centered interfaces, responsive layouts, and design systems that make products delightful and accessible.'
    },
    {
      title: 'API & Integration',
      desc: 'Design and implement robust REST APIs, third-party integrations, and backend services for real business flows.'
    },
    {
      title: 'Performance & SEO',
      desc: 'Optimize loading, bundle sizes, and metadata so your site is fast and discoverable.'
    },
    {
      title: 'Consulting & Strategy',
      desc: 'Technical audits, architecture advice, and roadmap planning to reduce risk and accelerate delivery.'
    }
  ];

  return (
    <section style={{ padding: '40px 20px', maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: 30 }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: 8 }}>About NTA</h1>
        <p style={{ color: '#374151', maxWidth: 800, margin: '0 auto' }}>
          We help businesses and founders build reliable web products quickly — from prototypes to production.
          Our focus is on clean code, clear UX, and measurable outcomes.
        </p>
      </header>

      <section style={{ display: 'grid', gap: 20 }}>
        <h2 style={{ fontSize: '1.5rem' }}>What we offer</h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            marginTop: 8,
          }}
        >
          {services.map((s, i) => (
            <article
              key={i}
              style={{
                flex: '1 1 300px',
                background: '#81b39bff',
                border: '1px solid #e5e7eb',
                borderRadius: 10,
                padding: 18,
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}
            >
              <h3 style={{ marginBottom: 8 }}>{s.title}</h3>
              <p style={{ margin: 0, color: '#4b5563' }}>{s.desc}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 24, padding: 18, borderRadius: 8, background: '#81b39bff' }}>
          <h3 style={{ marginTop: 0 }}>How we work</h3>
          <ul style={{ margin: '8px 0 0 18px', color: '#374151' }}>
            <li>Discovery: requirements, scope and success metrics</li>
            <li>Design: wireframes, prototypes, and design reviews</li>
            <li>Build: iterative sprints with continuous integration</li>
            <li>Deliver: handover, documentation and optional deployment support</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <button
            onClick={() => window.location.href = '/contact'}
            style={{
              padding: '10px 20px',
              borderRadius: 8,
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Work with us
          </button>
        </div>
      </section>
    </section>
  );
}
