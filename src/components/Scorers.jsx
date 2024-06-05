import React from "react";
import { useState, useEffect } from "react";
import '../css/Scorers.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";


const Scorers = () => {

    const [ selectedLeague, setSelectedLeague ] = useState('PL')
    const [ selectedSeason, setSelectedSeason ] = useState('2023');
    const [ scorerData, setScorerData ] = useState(null);

    useEffect(() => {
        const getTopScorers = async () => {
            if (selectedSeason) {
                try {
                    const response = await fetch(`http://localhost/football-score/src/api/getTopScorers.php?season=${selectedSeason}&id=${selectedLeague}`);

                    if (!response.ok) {
                        throw new Error('Error fetching response')
                    } 

                    const data = await response.json();
                    console.log('Top Scorer response:', data);

                    setScorerData(data.data.scorers);
                }

                catch (error) {
                    console.log('Error finding scorer data:', error);
                }
            }
        }
        getTopScorers();
    }, [selectedSeason, selectedLeague]);

    return (
        <div>
            <Navbar />
                <div className="scorers-container">
                    <div className="scorers-heading-container">
                        <h3 className="scorers-heading">Top Scorers</h3>
                    </div>
                    <div className="scorers-table-container">
                        <table className="table">
                            <thead className="scorers-table-head">
                                <tr scope="row">
                                    <th scope="col" className="text-start">Player</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">GP</th>
                                    <th scope="col">Goals</th>
                                </tr>
                            </thead>
                            <tbody className="scorers-table-body">
                            {scorerData ? scorerData.map((scorer, index) => (
                                <tr scope="row" key={index}>
                                    <td className="scorer-name">{scorer.player.name}</td>
                                    <td className="scorer-team"><img src={scorer.team.crest} width="20"></img>{scorer.team.name}</td>
                                    <td className="scorer-gamesplayed">{scorer.playedMatches}</td>
                                    <td className="scorer-goals">{scorer.goals}</td>
                                </tr>
                            )) : <tr><td colSpan="5">No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            <BottomBar />
        </div>
    )

}

export default Scorers