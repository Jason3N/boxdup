import React from 'react';
import { Link } from 'react-router-dom';  
import '../index.css'

function Navbar() {

    return (
        <div className = "h-14 bg-slate-600 flex flex-row text-white">
            <div className = "mt-3">
            <Link to="/" className="ml-10">home</Link>
            <Link to="/join" className="ml-10">join</Link>
            <Link to="/contact" className="ml-10">contact</Link>
            </div>
        </div>
    );
}

export default Navbar;