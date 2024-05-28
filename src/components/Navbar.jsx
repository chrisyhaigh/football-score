import React, { useState } from "react";
import '../css/Navbar.css'
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const toggleSideBar = () => {
        setSideBarVisible(!sideBarVisible);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to="/home">
                    <div className="logo-container">
                        <img className="logo-image" src="src\images\image_processing20200410-18222-12ilqee.png" alt="Logo" />
                    </div>
                </Link>
                <div className="nav-name-container">
                    <p className="nav-name">GOAL FOOTBALL</p>
                </div>
                <button id="sidebar-toggle" className="navbar-toggler" type="button" onClick={toggleSideBar} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${sideBarVisible ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink style={{textDecoration: 'none', color: 'black'}} to="/tables" className="nav-link active" aria-current="page">TABLES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{textDecoration: 'none', color: 'black'}} to="/scorers" className="nav-link">SCORERS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{textDecoration: 'none', color: 'black'}} to="/results" className="nav-link">RESULTS</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
