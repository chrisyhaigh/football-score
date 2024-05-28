import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Landing from './components/Landing.jsx'
import Home from './components/Home.jsx'
import Championship from './components/Championship.jsx'
import Bundesliga from './components/Bundesliga.jsx'
import Eredivisie from './components/Eredivisie.jsx'
import LaLiga from './components/LaLiga.jsx'
import Ligue1 from './components/Ligue1.jsx'
import PremierLeague from './components/PremierLeague.jsx'
import SerieA from './components/SerieA.jsx'
import PremeiraLiga from './components/PremeiraLiga.jsx'
import './index.css'

// development routes
import Tables from './components/Tables.jsx'
import Results from './components/Results.jsx'
import Scorers from './components/Scorers.jsx'




const Main = () => {
  const [enteredSite, setEnteredSite] = useState(false);

  const enterSiteClick = () => {
    setEnteredSite(true);
  }

  return (
    <React.StrictMode>
      <Router basename=''>
        <Routes>
          <Route path="" element={
              enteredSite ? (
                <>
                  <Home />
                </>
              ) : (
                <Landing onEnterClick={enterSiteClick} />
              )
          }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/bundesliga" element={<Bundesliga />} />
          <Route path="/eredivisie" element={<Eredivisie />} />
          <Route path="/laliga" element={<LaLiga />} />
          <Route path="/ligue1" element={<Ligue1 />} />
          <Route path="/premierleague" element={<PremierLeague />} />
          <Route path="/serieA" element={<SerieA />} />
          <Route path="/championship" element={<Championship />} />
          <Route path="/premeiraliga" element={<PremeiraLiga />} />


          {/* developmentroutes */}
          <Route path="/tables" element={<Tables />} />
          <Route path="/results" element={<Results />} />
          <Route path="/scorers" element={<Scorers />} />

        </Routes>
      </Router>
    </React.StrictMode>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main />);