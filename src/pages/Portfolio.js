import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Portfolio() {
    return(
        <div className='Portfolio container'>
                <nav className='portfolioNav'>
                    <Link to="/portfolio/">About</Link>
                    <Link to="/portfolio/shellApp">Shell App</Link>
                </nav>
                <Outlet />
        </div>
    )
}