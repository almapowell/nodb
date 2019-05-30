import React from 'react';
import DisplayTeams from './components/DisplayTeams'
import AFCTeams from './components/conferences/AFCTeams'
import NFCTeams from './components/conferences/NFCTeams'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>NFL <br/>
        Conferences</h1>
        <AFCTeams />
        <NFCTeams />
        <DisplayTeams  />
    </div>
  );
}

export default App;