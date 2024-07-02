import React from "react";
import "../css/LeagueButtons.css";

const LeagueButtons = ({ setSelectedLeague }) => {
    return (
        <div className="league-box-container">
            <div className="league-col">
                <div className="league-box" key="PL" onClick={() => setSelectedLeague('PL')}>
                    <div className="league-content">
                        <img width="40" src="src/league-logos/premier-league-logo.png" alt="Premier League" />
                    </div>
                </div>
                <div className="league-box" key="BL1" onClick={() => setSelectedLeague('BL1')}>
                    <div className="league-content">
                        <img width="40" src="src/league-logos/logo-bundesliga-1024.png" alt="Bundesliga" />
                    </div>
                </div>
                <div className="league-box" key="PD" onClick={() => setSelectedLeague('PD')}>
                    <div className="league-content">
                        <img width="41" src="src/league-logos/la-liga-logo-768x768.png" alt="La Liga" />
                    </div>
                </div>
                <div className="league-box" key="ELC" onClick={() => setSelectedLeague('ELC')}>
                    <div className="league-content">
                        <img width="35" src="src/league-logos/efl-logo.png" alt="Championship" />
                    </div>
                </div>
                <div className="league-box" key="PPL" onClick={() => setSelectedLeague('PPL')}>
                    <div className="league-content">
                        <img width="27" src="src/league-logos/Portuguese-Primeira-Liga-Logo.png" alt="Primeira Liga" />
                    </div>
                </div>
                <div className="league-box" key="DED" onClick={() => setSelectedLeague('DED')}>
                    <div className="league-content">
                        <img width="40" src="src/league-logos/eredivisie-logo-png-transparent.png" alt="Eredivisie" />
                    </div>
                </div>
                <div className="league-box" key="FL1" onClick={() => setSelectedLeague('FL1')}>
                    <div className="league-content">
                        <img width="41" src="src/league-logos/ligue-1-logo-0.png" alt="Ligue 1" />
                    </div>
                </div>
                <div className="league-box" key="SA" onClick={() => setSelectedLeague('SA')}>
                    <div className="league-content">
                        <img width="70" src="src/league-logos/Serie A 2021 Logo - Download Free PNG.png" alt="Serie A" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueButtons;
