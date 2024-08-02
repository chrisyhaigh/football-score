import React from "react";
import { useState, useEffect } from "react";
import '../css/Results.css';

const Results = ({ selectedLeague }) => {
    const [selectedMatchday, setSelectedMatchday] = useState("38");
    const [selectedSeason, setSelectedSeason] = useState("2023");
    const [resultsData, setResultsData] = useState(null);
    const [leagueEmblem, setLeagueEmblem] = useState('');

    useEffect(() => {
        const getWeekResults = async () => {
            if (selectedLeague) {
                try {
                    const response = await fetch(`http://localhost/football-score/src/api/getResults.php?season=${selectedSeason}&id=${selectedLeague}&matchday=${selectedMatchday}`);
                    if (!response.ok) {
                        throw new Error('API Response not valid');
                    }
                    const data = await response.json();
                    console.log('API Response:', data);

                    setResultsData(data.data.matches);
                    setLeagueEmblem(data.data.competition.emblem);
                } catch (error) {
                    console.log('Error finding scorer data:', error);
                }
            }
        }

        getWeekResults();
    }, [selectedSeason, selectedLeague, selectedMatchday]);

    return (
        <div>
            <div className="results-container">
                <div className="results-heading-container">
                    <h6 className="results-heading mt-2 ms-2">Recent Matches</h6>
                    <img src={leagueEmblem} width="35" className="me-2"/>
                </div>
                <div className="results-table-container">
                    <table className="table results-table-body">
                        <tbody>
                            {resultsData && resultsData.map((result, index) => (
                                <tr key={index}>
                                    <td className="home-team">{result.homeTeam.shortName}</td>
                                    <td><img className="team-badge" src={result.homeTeam.crest} alt={`${result.homeTeam.name} crest`} /></td>
                                    <td className="goal-score">{result.score.fullTime.home} - {result.score.fullTime.away}</td>
                                    <td className="away-team"><img className="team-badge" src={result.awayTeam.crest} alt={`${result.awayTeam.name} crest`} />{result.awayTeam.shortName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Results;
