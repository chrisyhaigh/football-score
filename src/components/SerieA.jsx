import React from "react";
import '../css/SerieA.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const SerieA = () => {
    return (
        <div>
            <Navbar />
            <div className="serieA-container">
                <div className="serieA-heading-select">
                    <img src="src\league-logos\Serie A 2021 Logo - Download Free PNG.png" width="60"></img>
                    <h1 className="league-heading">SERIE A</h1>
                    <select className="select-container">
                        <option className="season-option"></option>
                    </select>
                </div>
            </div>  
            <BottomBar />
        </div>
    )
}

export default SerieA