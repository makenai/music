import Scales from './routes/Scales';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
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
            <Scales />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
