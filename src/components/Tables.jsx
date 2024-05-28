import React from "react";
import { useState, useEffect } from "react";
import '../css/Tables.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Tables = () => {

    return (
        <div>
            <Navbar />
                <div className="tables-container">
                    <div className="tables-heading-container">
                        <h3 className="tables-heading">League Table</h3>
                    </div>
                </div>
            <BottomBar />
        </div>
    )

}

export default Tables