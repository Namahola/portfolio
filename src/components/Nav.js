import React from 'react';
import { Link, Router } from "@reach/router";
import Home from './home';

function Nav() {
    return (
        <div>
            <div className="logo">
             <Link to="/home"><h1>nannalaursen</h1></Link>
            </div>
        <nav>
           <Link to="/home">Home</Link>
           <Link to="/work">Work</Link>
           <Link to="/about">About</Link>
           
        </nav>
        <Router>
            <Home path="/home" />
            
        </Router>
        </div>
    )
}

export default Nav;
