import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";
import React, { Component } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import WordList from "./components/mainPage/wordList";
import Repetition from "./components/repetition/repetition";
import RepetitionResults from "./components/repetition/repetitionResults";
import { browserHistory } from "./history";
class App extends Component {
  render() {
    return (
      <div>
        {/* TODO: proper way to redirect without errors on console */}
        <Router history={browserHistory}>
          <div className="container-fluid">
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

            <Switch>
              <Route exact path={["/", "/dict"]} component={WordList} />
              <Route exact path="/repetition" component={Repetition} />
              <Route exact path="/results" component={RepetitionResults} />
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
