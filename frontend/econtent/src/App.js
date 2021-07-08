import logo from './logo.svg';
import './App.css';
import Login from './login'
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
