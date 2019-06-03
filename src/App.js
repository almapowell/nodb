import React from 'react';
import DisplayTeams from './components/DisplayTeams'
import AFCTeams from './components/conferences/AFCTeams'
import NFCTeams from './components/conferences/NFCTeams'
import './App.css';
import NFLLogo from './components/conferences/NFLLogo';

function App() {
  return (
    <div className="App" >
      <div className="background">
      <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet"></link>
        <h1>NFL<br/>
        Conferences</h1>
        <NFLLogo />
        <AFCTeams />
        <NFCTeams />
        <DisplayTeams  />
        </div>
    </div>
  );
}

export default App;