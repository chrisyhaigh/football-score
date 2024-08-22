import React, { useState, useEffect } from "react";
import '../css/Scorers.css';
import LoadingSpinner from "./LoadingSpinner";

const Scorers = ({ selectedLeague }) => {
    const [selectedSeason, setSelectedSeason] = useState('2024');
    const [scorerData, setScorerData] = useState(null);
    const [leagueEmblem, setLeagueEmblem] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getTopScorers = async () => {
            setIsLoading(true);
            if (selectedLeague) {
                try {
                    const response = await fetch(`http://localhost/football-score/src/api/getTopScorers.php?season=${selectedSeason}&id=${selectedLeague}`);

                    if (!response.ok) {
                        throw new Error('Error fetching response');
                    }

                    const data = await response.json();
                    console.log('Top Scorer response:', data);

                    setScorerData(data.data.scorers);
                    setLeagueEmblem(data.data.competition.emblem);
                } catch (error) {
                    console.log('Error finding scorer data:', error);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        getTopScorers();
    }, [selectedSeason, selectedLeague]);

    return (
        <div className="scorers-container">
            <div className="scorers-heading-container">
                <h6 className="scorers-heading mt-2 ms-2">Top Scorers</h6>
                <img src={leagueEmblem} width="35" className="me-2" alt="League Emblem" />
            </div>
            <div className="scorers-table-container">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
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
                            {scorerData && scorerData.length > 0 ? (
                                scorerData.map((scorer, index) => (
                                    <tr scope="row" key={index}>
                                        <td className="scorer-name">{scorer.player.name}</td>
                                        <td className="scorer-team">
                                            <img src={scorer.team.crest} className="me-1" width="16" alt={`${scorer.team.shortName} crest`} />
                                            {scorer.team.shortName}
                                        </td>
                                        <td className="scorer-gamesplayed">{scorer.playedMatches}</td>
                                        <td className="scorer-goals">{scorer.goals}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Scorers;
