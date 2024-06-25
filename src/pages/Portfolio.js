import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes, Outlet} from 'react-router-dom'

export default function Portfolio() {
    return(
        <div className='Portfolio'>
                <nav className='portfolioNav'>
                    <Link to="/portfolio/">About</Link>
                    <Link to="/portfolio/shellApp">Shell App</Link>
                </nav>
                <Outlet />
        </div>
    )
}