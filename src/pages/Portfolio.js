import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

import PortAbout from './PortAbout'
import ShellApp from './ShellApp'

export default function Portfolio() {
    return(
        <div className='Portfolio'>
            <Router>
                <nav className='portfolioNav'>
                    <Link to="/portfolio/">About</Link>
                    <Link to="/portfolio/shellApp">Shell App</Link>
                </nav>
                <Routes>
                    <Route path='/portfolio/' element={<PortAbout />} />
                    <Route path='/portfolio/shellApp' element={<ShellApp />} />
                </Routes>
            </Router>
        </div>
    )
}