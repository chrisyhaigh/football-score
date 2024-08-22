import React, { useState } from "react";
import '../css/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const toggleSideBar = () => {
        setSideBarVisible(!sideBarVisible);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to="/home" className="custom-link">
                    <div className="logo-container">
                        <img className="logo-image" src="src/images/image_processing20200410-18222-12ilqee.png" alt="Logo" />
                        <p className="nav-name">GOAL FOOTBALL</p>
                    </div>
                </Link>
                <form className="brightness-mode">
                <label className="theme-option">
                        <i className="fa-solid fa-sun"></i>
                        <input className="light-theme-radio" type="radio" name="theme" value="light" defaultChecked />
                    </label>
                    <label className="theme-option">
                        <i className="fa-solid fa-moon"></i>
                        <input className="dark-theme-radio" type="radio" name="theme" value="dark" />
                    </label>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
