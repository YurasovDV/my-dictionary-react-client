import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { getPage } from "../actions/dict";
import WordRow from "./wordRow";
import AddWord from "./addWord";

class WordList extends Component {
  componentDidMount() {
    this.props.getPage();
  }

  render() {
    const words = this.props.words || [];

    if (words.length === 0) {
      return (
        <React.Fragment>
          <AddWord />
          <div className="text-centered warning">No words found</div>
        </React.Fragment>
      );
    }

    const table = (
      <div className="container">
        <AddWord />
        <div className="row">
          <div className="col-12 text-centered">
            <h2>Your dictionary</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Translations</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {words.map((el) => (
                  <WordRow model={el} key={el.term} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );

    return table;
  }
}

const mapStateToProps = (state) => ({ words: state.words });

const mapDispatchToProps = {
  getPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordList);