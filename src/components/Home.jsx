import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import '../css/Home.css';

const Home = () => {


    return (
        <div>
            <div className="navbar-heading">
                <Navbar />
            </div>
            <div className="home-container">
                <div className="home-heading">
                    <h5 className="welcome-message text-center">Welcome to <span className="span-name">GOAL FOOTBALL</span></h5>
                    <p className="choose-league-message text-center">Select a league for results, scorers and assists data</p>
                </div>
                <div class="league-box-container">
                    <div class="league-col">
                        <Link to="/premierleague">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="80" src="src\league-logos\premier-league-logo.png"></img>
                                </div>
                            </div>
                        </Link>
                        <Link to="/bundesliga">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="80" src="src\league-logos\logo-bundesliga-1024.png"></img>
                                </div>
                            </div>
                        </Link>
                        <Link to="/laliga">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="80" src="src\league-logos\la-liga-logo-768x768.png"></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="league-col">
                        <Link to="/eredivisie">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="70" src="src\league-logos\eredivisie-logo-png-transparent.png"></img>
                                </div>
                            </div>
                        </Link>
                        <Link to="/ligue1">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="90" src="src\league-logos\ligue-1-logo-0.png"></img>
                                </div>
                            </div>
                        </Link>
                        <Link to="/serieA">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="160" src="src\league-logos\Serie A 2021 Logo - Download Free PNG.png"></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
