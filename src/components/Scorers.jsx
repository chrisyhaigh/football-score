import React from "react";
import '../css/Scorers.css';
import Navbar from "./Navbar";

const Scorers = () => {

    return (
        <div>
            <Navbar />
            <div className="scorers-container">
                <div className="scorers-heading-container">
                    <h3 className="scorers-heading">Top Scorers</h3>
                </div>
            </div>
        </div>
    )

}

export default Scorers