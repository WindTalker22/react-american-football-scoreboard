//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react"
import "./App.css"
import BottomRow from "./BottomRow"
import Score from "./component/Score.js"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  // Variable Declarations
  const [homeScore, setHomeScore] = useState(0);
  const [homeTeam, setHomeTeam] = useState('Lions')
  const [awayScore, setAwayScore] = useState(0);
  const [awayTeam, setAwayTeam] = useState('Vikings')


  // Event Handlers
  let homeScoreClickHandler = () => {
    console.log('homeScoreClick')
    setHomeScore(homeScore + 6)
  }

  let homeFgClickHandler = () => {
    console.log(('homeFgclick'))
    setHomeScore(homeScore + 1)
  }
  let awayScoreClickHandler = () => {
    console.log('awayScoreClick')
    setAwayScore(awayScore + 6)
  }

  let awayFgClickHandler = () => {
    console.log(('awayFgclick'))
    setAwayScore(awayScore + 1)
  }

  
  


  return (
    <section className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{ homeTeam }</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ homeScore }</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{ awayTeam }</h2>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <Score 
        homeScore = {homeScoreClickHandler} 
        homeFgClick = {homeFgClickHandler}
        firstClassName = {'homeButtons'}
        secondClassName = {'__touchdown'}
        thirdClassName ={'__fieldGoal'}
        side = {'Home'}
        />
        <Score 
        homeScore = {awayScoreClickHandler} 
        homeFgClick = {awayFgClickHandler}
        firstClassName = {'awayButtons'}
        secondClassName = {'__touchdown'}
        thirdClassName ={'__fieldGoal'}
        side = {'Away'}
        />
        
        
      </section>
    </section>
  );
}

export default App;
