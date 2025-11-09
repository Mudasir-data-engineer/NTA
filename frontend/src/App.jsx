import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import './App.css'

function Home({ backendStatus }) {
  return (
    <main style={{ paddingBottom: '90px', minHeight: '70vh' }}>
      <Hero />
      <Services />

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>Backend Status: {backendStatus}</h2>
      </div>
    </main>
  )
}

function App() {
  const [backendStatus, setBackendStatus] = useState('Loading...')

  useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.status))
      .catch(() => setBackendStatus('Backend not reachable'))
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home backendStatus={backendStatus} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
