import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ padding: '20px', background: '#000000', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>NovaTechAgency</Link>
      </div>
      <nav>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
        <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header
