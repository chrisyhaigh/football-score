import React from "react";
import '../css/Bundesliga.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Bundesliga = () => {
    return (
        <div>
            <Navbar />
            <div className="bundesliga-container">
                <div className="bundesliga-heading-select">
                    <img src="src\league-logos\logo-bundesliga-1024.png" width="60"></img>
                    <h1 className="league-heading">BUNDESLIGA</h1>
                    <select className="select-container">
                        <option className="season-option"></option>
                    </select>
                </div>
            </div>
            <BottomBar />  
        </div>
    )
}

export default Bundesliga