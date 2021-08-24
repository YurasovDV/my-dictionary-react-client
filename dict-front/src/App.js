import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WordList from './components/wordList';
import AddWord from './components/addWord';

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <div>
            <li>
            <Link to={"/dict"}>View dictionary</Link>
            </li>
            <li>
            <Link to={"/add"}>Add word</Link>
            </li>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path={["/", "/dict"]} component={WordList} />
            <Route exact path="/add" component={AddWord} />
          </Switch>
          </div>   
      </Router>
    );
  }

}

export default App;
