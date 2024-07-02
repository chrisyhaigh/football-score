import React from "react";
import { useState, useEffect } from "react";
import '../css/Scorers.css';


const Scorers = ({ selectedLeague }) => {

    const [ selectedSeason, setSelectedSeason ] = useState('2023');
    const [ scorerData, setScorerData ] = useState(null);

    useEffect(() => {
        const getTopScorers = async () => {
            if (selectedLeague) {
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
                <div className="scorers-container">
                    <div className="scorers-heading-container">
                        <h6 className="scorers-heading ms-2">Top Scorers</h6>
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
                                    <td className="scorer-team"><img src={scorer.team.crest} className="me-1" width="16"></img>{scorer.team.shortName}</td>
                                    <td className="scorer-gamesplayed">{scorer.playedMatches}</td>
                                    <td className="scorer-goals">{scorer.goals}</td>
                                </tr>
                            )) : <tr><td colSpan="5">No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )

}

export default Scorers