import React from 'react';
import { Link, Router } from "@reach/router";
import Home from './home';

function Nav() {
    return (
        <div>
           
            <div className="header"> 
            <div className="logo">
             <Link to="/home" className="logo-link">
                 
<h1 className="logo-heading">nannalaursen</h1></Link>
            </div>
                <nav className="nav">
           <Link to="/home" className="nav-link">Home</Link>
           <Link to="/work" className="nav-link">Work</Link>
           <Link to="/about" className="nav-link">About</Link>
        </nav>
            </div>
        
        <Router>
            <Home path="/home" />
            
        </Router>
        </div>
    )
}

export default Nav;
