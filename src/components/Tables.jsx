import React from "react";
import '../css/Tables.css';
import Navbar from "./Navbar";

const Tables = () => {

    return (
        <div>
            <Navbar />
            <div className="tables-container">
                <div className="tables-heading-container">
                    <h3 className="tables-heading">League Table</h3>
                </div>
            </div>
        </div>
    )

}

export default Tables