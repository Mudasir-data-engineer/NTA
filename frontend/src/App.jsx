import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home({ backendStatus }) {
  const [count, setCount] = useState(0)

  return (
    <main style={{ padding: '20px', paddingBottom: '90px', minHeight: '70vh' }}>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Backend Status: {backendStatus}</h2>
      </div>
    </main>
  )
}

function About() {
  return (
    <main style={{ padding: '20px', paddingBottom: '90px', minHeight: '70vh' }}>
      <h2>About NTA</h2>
      <p>Short description about your agency and goals.</p>
    </main>
  )
}

function Contact() {
  return (
    <main style={{ padding: '20px', paddingBottom: '90px', minHeight: '70vh' }}>
      <h2>Contact</h2>
      <p>Email: hello@nta.example (placeholder)</p>
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
