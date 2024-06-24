import './App.css';


import About from './pages/About';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <>
      <HomePage />
      <About />
    </>
  )
}

// Use the parameters for App() to pass through what page I want rendered when it is
// called from index.js. Just have to work out how this my work.