import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import '../css/Home.css';
import BottomBar from "./BottomBar";
import LeagueButtons from "./LeagueButtons";
import Tables from "./Tables";
import Scorers from "./Scorers";
import Results from "./Results";

const Home = () => {
    const [selectedLeague, setSelectedLeague] = useState('PL');

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
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <Tables selectedLeague={selectedLeague} />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <Scorers />
                            </div>
                            <div className="col-12">
                                <Results />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-nav">
                <BottomBar />
            </div>
        </div>
    );
}

export default Home;
