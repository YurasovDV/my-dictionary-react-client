import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WordList from "./components/wordList";
import Repetition from "./components/repetition";

class App extends Component {
  render() {
    return (
      <Router>
        <ul className="nav justify-content-start">
          <li className="nav-item">
            <Link to={"/dict"} className="nav-link">
              View dictionary
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/repetition"} className="nav-link">
              Repeat words
            </Link>
          </li>
        </ul>
        <div className="container-fluid">
          <Switch>
            <Route exact path={["/", "/dict"]} component={WordList} />
            <Route exact path="/repetition" component={Repetition} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
