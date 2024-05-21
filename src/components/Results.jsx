import React from "react";
import '../css/Results.css';
import Navbar from "./Navbar";

const Results = () => {

    return (
        <div>
            <Navbar />
            <div className="results-container">
                <div className="results-heading-container">
                    <h3 className="results-heading">Results</h3>
                </div>
            </div>
        </div>
    )

}

export default Results