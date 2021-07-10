import React from 'react';
import useState from 'react-usestateref'
import ModesRoute from './routes/Modes';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import { SynthContext } from './utils/synth';
import './App.scss';

function App() {
  const [ notes, setNotes, ref ] = useState({});
  return (
    <SynthContext.Provider value={{ notes, setNotes, ref }}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <p>Hello, doing some stuff to follow along with <a href="https://www.coursera.org/learn/edinburgh-music-theory">Fundamentals of Music Theory</a>.</p>
              <p>-Pawel</p>
            </Route>
            <Route path="/modes">
              <ModesRoute />
            </Route>
          </Switch>
        </Router>
      </div>
    </SynthContext.Provider>
  );
}

export default App;
