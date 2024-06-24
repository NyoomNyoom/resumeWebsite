import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'


import About from './pages/About';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer'

export default function App() {
  return (
    <div className="mainContent">
      <Router>
        <nav className="navbar">
          <Link className="links" to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

// Use the parameters for App() to pass through what page I want rendered when it is
// called from index.js. Just have to work out how this my work.