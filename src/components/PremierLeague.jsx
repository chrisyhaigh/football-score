import React from "react";
import '../css/PremierLeague.css';
import Navbar from "./Navbar";

const PremierLeague = () => {
    return (
        <div>
            <Navbar />
            <div className="premierleague-container">
                <div className="premierleague-heading-select">
                    <img src="src\league-logos\premier-league-logo.png" width="60"></img>
                    <h1 className="league-heading">PREMIER LEAGUE</h1>
                    <select className="select-container">
                        <option className="season-option"></option>
                    </select>
                </div>
            </div>  
        </div>
    )
}

export default PremierLeague