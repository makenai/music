import React from 'react';
import ScalesRoute from './routes/Scales';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <p>Hello, doing some stuff to follow along with <a href="https://www.coursera.org/learn/edinburgh-music-theory">Fundamentals of Music Theory</a>.</p>
            <p>-Pawel</p>
          </Route>
          <Route path="/scales">
            <ScalesRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
