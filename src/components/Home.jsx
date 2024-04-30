import React from "react";
import Navbar from "./Navbar";
import '../css/Home.css';

const Home = () => {


    return (
        <div>
            <div className="navbar-heading">
                <Navbar />
            </div>
            <div className="home-container">
                <div className="home-heading">
                    <h3 className="welcome-message text-center">Welcome to <span className="span-name">GOAL FOOTBALL</span></h3>
                    <h6 className="choose-league-message text-center">Select a league for results, scorers and assists data</h6>
                </div>
                <div class="league-box-container">
                    <div class="league-col">
                        <div class="league-box">
                            <div class="league-content">
                                <img width="80" src="src\league-logos\premier-league-logo.png"></img>
                            </div>
                        </div>
                        <div class="league-box">
                            <div class="league-content">
                                <img width="80" src="src\league-logos\logo-bundesliga-1024.png"></img>
                            </div>
                        </div>
                        <div class="league-box">
                            <div class="league-content">
                                <img width="80" src="src\league-logos\la-liga-logo-768x768.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className="league-col">
                        <div class="league-box">
                            <div class="league-content">
                                <img width="70" src="src\league-logos\eredivisie-logo-png-transparent.png"></img>
                            </div>
                        </div>
                        <div class="league-box">
                            <div class="league-content">
                                <img width="90" src="src\league-logos\ligue-1-logo-0.png"></img>
                            </div>
                        </div>
                        <div class="league-box">
                            <div class="league-content">
                                <img width="160" src="src\league-logos\Serie A 2021 Logo - Download Free PNG.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
