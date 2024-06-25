import React from "react";
import '../css/Ligue1.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Ligue1 = () => {
    return (
        <div>
            <Navbar />
            <div className="ligue1-container">
                <div className="ligue1-heading-select">
                    <img src="src\league-logos\ligue-1-logo-0.png" width="60"></img>
                    <h1 className="league-heading">LIGUE 1</h1>
                    <select className="select-container">
                        <option className="season-option"></option>
                    </select>
                </div>
            </div>  
            <div className="footer-nav">
                <BottomBar />
            </div>
        </div>
    )
}

export default Ligue1