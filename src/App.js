import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'


import About from './pages/About';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer'
import Portfolio from './pages/Portfolio';
import PortAbout from './pages/PortAbout'
import ShellApp from './pages/ShellApp'

export default function App() {
  return (
    <div className="mainContent">
      <Router>
        <nav className="navbar">
          <Link className="links" to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to='/portfolio'>Portfolio</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path='/portfolio' element={<Portfolio />}>
            <Route path='/portfolio/' element={<PortAbout />} />
            <Route path='/portfolio/shellApp' element={<ShellApp />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}