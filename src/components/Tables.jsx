import React from "react";
import { useState, useEffect } from "react";
import '../css/Tables.css';
import BottomBar from "./BottomBar";

const Tables = () => {

    const [currentSeason, setCurrentSeason] = useState('2020');
    const [selectedLeague, setSelectedLeague] = useState('PL');
    const [leagueData, setLeagueData] = useState(null);

    useEffect(() => {
       const getLeagueTable = async () => {
            if (selectedLeague) {
                try {
                    const response = await fetch(`http://localhost/football-score/src/api/getLeagueTable.php?season=${currentSeason}&id=${selectedLeague}`);
                    console.log('API Response:', response);

                    if (!response.ok) {
                        throw new Error('Invalid arguments for league table')
                    }

                    const data = await response.json();
                    console.log('League Standings: ', data);

                    setLeagueData(data.data.standings[0].table);
                } catch (error) {
                    console.log('Unable to fetch league standings', error)
                }
            }
       }
       getLeagueTable(); 
    }, [selectedLeague]);


    return (
        <div>
                <div className="tables-container">
                    <div className="tables-heading-container">
                        <h3 className="tables-heading">League Table</h3>
                    </div>
                    <div className="league-table-container">
                        <table className="table">
                            <thead className="league-table-head">
                                <tr scope="row">
                                    <th scope="col">#</th>
                                    <th scope="col" className="text-start">Team</th>
                                    <th scope="col">P</th>
                                    <th scope="col">W</th>
                                    <th scope="col">D</th>
                                    <th scope="col">L</th>
                                    <th scope="col">F</th>
                                    <th scope="col">A</th>
                                    <th scope="col">GD</th>
                                    <th scope="col">PTS</th>
                                </tr>
                            </thead>
                            <tbody className="league-table-body">
                            {leagueData ? leagueData.map((team, index) => (
                                <tr scope="row" key={index}>
                                    <td className="team-position">{team.position}</td>
                                    <td className="text-start team-name"><img src={team.team.crest} width="25"></img> {team.team.shortName}</td>
                                    <td className="played-games">{team.playedGames}</td>
                                    <td className="won-games">{team.won}</td>
                                    <td className="drawn-games">{team.draw}</td>
                                    <td className="lost-games">{team.lost}</td>
                                    <td className="goals-for">{team.goalsFor}</td>
                                    <td className="goals-against">{team.goalsAgainst}</td>
                                    <td className="goaldifference">{team.goalDifference}</td>
                                    <td className="team-points">{team.points}</td>
                                </tr>
                            )) : <tr><td colSpan="11">No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            <BottomBar />
        </div>
    )

}

export default Tables