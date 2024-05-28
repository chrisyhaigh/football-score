import React from "react";
import '../css/BottomBar.css';
import { NavLink } from "react-router-dom";

const BottomBar = () => {
    return (
        <nav className="bottombar-container">
            <footer className="bottom-footer">
                <NavLink to="/home" className="nav-element-container" activeClassName="active">
                    <i class="fa-solid fa-house"></i>
                    <p>Home</p>
                </NavLink>
                <NavLink to="/tables" className="nav-element-container" activeClassName="active">
                    <i className="fa-solid fa-table"></i>
                    <p>Tables</p>
                </NavLink>
                <NavLink to="/scorers" className="nav-element-container" activeClassName="active">
                    <i className="fa-solid fa-futbol"></i>
                    <p>Scorers</p>
                </NavLink>
                <NavLink to="/results" className="nav-element-container" activeClassName="active">
                    <i className="fa-solid fa-list"></i>
                    <p>Results</p>
                </NavLink>
            </footer>
        </nav>
    );
}

export default BottomBar;
