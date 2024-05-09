import React from "react";
import '../css/LaLiga.css';
import Navbar from "./Navbar";

const LaLiga = () => {
    return (
        <div>
            <Navbar />
            <div className="laliga-container">
                <div className="laliga-heading-select">
                    <img src="src\league-logos\la-liga-logo-768x768.png" width="60"></img>
                    <h1 className="league-heading">LA LIGA</h1>
                    <select className="select-container">
                        <option className="season-option"></option>
                    </select>
                </div>
            </div>  
        </div>
    )
}

export default LaLiga