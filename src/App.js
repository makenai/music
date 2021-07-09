import React from 'react';
import ScalesRoute from './routes/Scales';
import SynthContext from './context/SynthContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as Tone from "tone";
import './App.css';

const synth = new Tone.Synth().toDestination();

function playNote(note) {
  synth.triggerAttackRelease(note, "8n");
}

function App() {
  const synthContext = {
    synth, playNote
  };
  return (
    <SynthContext.Provider value={synthContext}>
      <div className="App">
        <Router>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/scales">Scales</Link>
          </div>
          <Switch>
            <Route exact path="/">
              Hello
            </Route>
            <Route path="/scales">
              <ScalesRoute />
            </Route>
          </Switch>
        </Router>
      </div>
    </SynthContext.Provider>
  );
}

export default App;
