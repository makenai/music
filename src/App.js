import React from 'react';
import useState from 'react-usestateref'
import ModesRoute from './routes/Modes';
import IntroChordsRoute from './routes/IntroChords';
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
            <Route path="/introChords">
              <IntroChordsRoute />
            </Route>
          </Switch>
        </Router>
      </div>
      <a href="https://github.com/makenai/music" className="fork-me">
        <img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149" alt="Fork me on GitHub" data-recalc-dims="1" />
      </a>
    </SynthContext.Provider>
  );
}

export default App;
