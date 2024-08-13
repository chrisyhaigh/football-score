import React, { useState } from "react";
import Navbar from "./Navbar";
import '../css/Home.css';
import BottomBar from "./BottomBar";
import LeagueButtons from "./LeagueButtons";
import Tables from "./Tables";
import Scorers from "./Scorers";
import Results from "./Results";

const Home = () => {
    const [selectedLeague, setSelectedLeague] = useState('PL');
    const [contentDisplayed, setContentDisplayed] = useState('tables');

    const isMobileOrTablet = window.innerWidth <= 992;

    const renderContent = () => {
        switch (contentDisplayed) {
            case 'tables':
                return <Tables selectedLeague={selectedLeague} />;
            case 'scorers':
                return <Scorers selectedLeague={selectedLeague} />;
            case 'results':
                return <Results selectedLeague={selectedLeague} />;
            default:
                return <Tables selectedLeague={selectedLeague} />;
        }
    };

    return (
        <div>
            <div className="navbar-heading">
                <Navbar />
            </div>
            <div className="container mt-4 home-container">
                <div className="row">
                    <div className="col-12">
                        <LeagueButtons setSelectedLeague={setSelectedLeague} />
                    </div>
                </div>
                {isMobileOrTablet ? (
                    <div className="row mt-2">
                        <div className="col-12 mb-4">
                            {renderContent()}
                        </div>
                    </div>
                ) : (
                    <div className="row mt-2">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <Tables selectedLeague={selectedLeague} />
                        </div>
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <Results selectedLeague={selectedLeague} />
                                </div>
                                <div className="col-12">
                                    <Scorers selectedLeague={selectedLeague} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="footer-nav">
                <BottomBar setContentDisplayed={setContentDisplayed} />
            </div>
        </div>
    );
}

export default Home;
