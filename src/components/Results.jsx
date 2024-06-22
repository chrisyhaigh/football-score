import React from "react";
import { useState, useEffect } from "react";
import '../css/Results.css';
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Results = () => {

    const [ selectedMatchday, setSelectedMatchday ] = useState("1");
    const [ selectedSeason, setSelectedSeason ] = useState("2023");
    const [ selectedLeague, setSelectedLeague ] = useState("PL");
    const [ resultsData, setResultsData ] = useState(null);

    useEffect(() => {
        const getWeekResults = async () => {
            if (selectedSeason) {
                try {
                    const response = await fetch(`http://localhost/football-score/src/api/getResults.php?season=${selectedSeason}&league=${selectedLeague}&matchday=${selectedMatchday}`);


                    if (!response.ok) {
                        throw new Error('Api Response not valid')
                    }

                    const data = await response.json();
                    console.log('API Response:', data);

                    setResultsData(data.data.matches);
                }

                catch (error) {
                    console.log('Error finding scorer data:', error);
                }
            }
        }

        getWeekResults();
    }, [selectedSeason, selectedLeague, selectedMatchday]);


    return (
        <div>
            <Navbar />
            <div className="results-container">
                <div className="results-heading-container">
                    <h3 className="results-heading">Results</h3>
                </div>
            </div>
            <BottomBar />
        </div>
    )

}

export default Results