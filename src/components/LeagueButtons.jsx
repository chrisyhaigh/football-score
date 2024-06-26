import React from "react"
import { Link } from "react-router-dom";
import "../css/LeagueButtons.css"

const LeagueButtons = () => {

    return (
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
                        <Link to="/championship">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="68" src="src\league-logos\efl-logo.png"></img>
                                </div>
                            </div>
                        </Link>
                        <Link to="/premeiraliga">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="55" src="src\league-logos\Portuguese-Primeira-Liga-Logo.png"></img>
                                </div>
                            </div>
                        </Link>
                        <Link to="/eredivisie">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="80" src="src\league-logos\eredivisie-logo-png-transparent.png"></img>
                                </div>
                            </div>
                        </Link>
                        <Link to="/ligue1">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="80" src="src\league-logos\ligue-1-logo-0.png"></img>
                                </div>
                            </div>
                        </Link>
                        <Link to="/serieA">
                            <div class="league-box">
                                <div class="league-content">
                                    <img width="140" src="src\league-logos\Serie A 2021 Logo - Download Free PNG.png"></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
    )

}

export default LeagueButtons
