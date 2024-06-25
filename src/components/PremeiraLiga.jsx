import React from "react";
import '../css/PremeiraLiga.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const PremeiraLiga = () => {
    return (
        <div>
            <Navbar />
            <div className="premeiraliga-container">
                <div className="premeiraliga-heading-select">
                    <img src="src\league-logos\Portuguese-Primeira-Liga-Logo.png" width="60"></img>
                    <h1 className="league-heading">Premeira Liga</h1>
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

export default PremeiraLiga