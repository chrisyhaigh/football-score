import React from "react";
import '../css/Sidebar.css';
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    return (
        <div>
            <div className="sidebar-container">
                <ul className="sidebar-nav-item-container">
                    <li className="side-nav-item">
                        <div className="side-nav-content">
                            <NavLink to="/premierleague" className="side-nav-link">PREMIER LEAGUE</NavLink>
                        </div>
                    </li>
                    <li className="side-nav-item">
                        <div className="side-nav-content">
                            <NavLink className="side-nav-link">BUNDESLIGA</NavLink>
                        </div>
                    </li>
                    <li className="side-nav-item">
                        <div className="side-nav-content">
                            <NavLink className="side-nav-link">LIGUE 1</NavLink>
                        </div>
                    </li>
                    <li className="side-nav-item">
                        <div className="side-nav-content">
                            <NavLink className="side-nav-link">LA LIGA</NavLink>
                        </div>
                    </li>
                    <li className="side-nav-item">
                        <div className="side-nav-content">
                            <NavLink className="side-nav-link">EREDIVISIE</NavLink>
                        </div>
                    </li>
                    <li className="side-nav-item">
                        <div className="side-nav-content">
                            <NavLink className="side-nav-link">SERIE A</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Sidebar