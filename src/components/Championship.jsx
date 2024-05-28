import React from "react";
import '../css/Championship.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Championship = () => {
    return (
        <div>
            <Navbar />
            <div className="championship-container">
                <div className="championship-heading-select">
                    <img src="src\league-logos\efl-logo.png" width="60"></img>
                    <h1 className="league-heading">EFL Championship</h1>
                    <select className="select-container">
                        <option className="season-option"></option>
                    </select>
                </div>
            </div>
            <BottomBar />  
        </div>
    )
}

export default Championship