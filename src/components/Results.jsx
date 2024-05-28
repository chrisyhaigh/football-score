import React from "react";
import '../css/Results.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Results = () => {

    return (
        <div>
            <Navbar />
            <div className="results-container">
                <div className="results-heading-container">
                    <h3 className="results-heading">Results</h3>
                </div>
            </div>
            <BottomBar />
        </div>
    )

}

export default Results