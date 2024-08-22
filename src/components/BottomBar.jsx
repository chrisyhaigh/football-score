import React from "react";
import '../css/BottomBar.css';

const BottomBar = ({ setContentDisplayed }) => {

    return (
        <nav className="bottombar-container">
            <footer className="bottom-footer">
                <div onClick={() => setContentDisplayed('tables')} className="nav-element-container">
                    <i className="fa-solid fa-table"></i>
                    <p>Tables</p>
                </div>
                <div onClick={() => setContentDisplayed('scorers')} className="nav-element-container">
                    <i className="fa-solid fa-futbol"></i>
                    <p>Scorers</p>
                </div>
                <div onClick={() => setContentDisplayed('results')} className="nav-element-container">
                    <i className="fa-solid fa-list"></i>
                    <p>Results</p>
                </div>
            </footer>
        </nav>
    );
}

export default BottomBar;