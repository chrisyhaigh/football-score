import React from "react";
import '../css/Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <div className="logo-container">
                    <img className="logo-image" src="src\images\image_processing20200410-18222-12ilqee.png"></img>
                </div>
                <div className="nav-name-container">
                    <p className="nav-name">GOAL FOOTBALL</p>
                </div>
                    <button id="sidebar-toggle" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to="/premierleague" class="nav-link active" aria-current="page" href="#">PREMIER LEAGUE</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to="/bundesliga" class="nav-link" href="#">BUNDESLIGA</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to="/ligue1" class="nav-link" href="#">LIGUE 1</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to="/laliga" class="nav-link" href="#">LA LIGA</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to="/eredivisie" class="nav-link" href="#">EREDIVISIE</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to="/serieA" class="nav-link" href="#">SERIE A</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;