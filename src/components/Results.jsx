import React from "react";
import { useState, useEffect } from "react";
import '../css/Results.css';

const Results = ({ selectedLeague }) => {
    const [selectedMatchday, setSelectedMatchday] = useState("1");
    const [selectedSeason, setSelectedSeason] = useState("2023");
    const [resultsData, setResultsData] = useState(null);

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
                    <h6 className="results-heading ms-2">Recent Matches</h6>
                </div>
                <div className="results-table-container">
                    <table className="table">
                        <tbody>
                            {resultsData && resultsData.map((result, index) => (
                                <tr key={index}>
                                    <td className="home-team">{result.homeTeam.shortName}</td>
                                    <td><img className="team-badge" src={result.homeTeam.crest} alt={`${result.homeTeam.name} crest`} /></td>
                                    <td className="home-goal-score">{result.score.fullTime.home}</td>
                                    <td>-</td>
                                    <td className="away-goal-score">{result.score.fullTime.away}</td>
                                    <td><img className="team-badge" src={result.awayTeam.crest} alt={`${result.awayTeam.name} crest`} /></td>
                                    <td className="away-team">{result.awayTeam.shortName}</td>
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
