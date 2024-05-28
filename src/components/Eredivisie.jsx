import React from "react";
import '../css/Eredivisie.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Eredivisie = () => {
    return (
        <div>
            <Navbar />
            <div className="eredivisie-container">
                <div className="eredivisie-heading-select">
                    <img src="src\league-logos\eredivisie-logo-png-transparent.png" width="60"></img>
                    <h1 className="league-heading">EREDIVISIE</h1>
                    <select className="select-container">
                        <option className="season-option"></option>
                    </select>
                </div>
            </div>
            <BottomBar />  
        </div>
    )
}

export default Eredivisie