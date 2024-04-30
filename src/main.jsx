import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Landing from './components/Landing.jsx'
import Home from './components/Home.jsx'
import './index.css'

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
        </Routes>
      </Router>
    </React.StrictMode>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Main />);