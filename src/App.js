import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from 'react-redux-toastr'
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WordList from "./components/wordList";
import Repetition from "./components/repetition";
class App extends Component {
  render() {
    return (
      <div>
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

        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          getState={(state) => state.toastr}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </div>
    );
  }
}

export default App;
