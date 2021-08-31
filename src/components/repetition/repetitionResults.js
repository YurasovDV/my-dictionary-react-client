import React, { Component } from "react";
import { connect } from "react-redux";

import { repetitionStatus } from "../../models/wordDto";

import "./repetition.css";

export class RepetitionResults extends Component {
  render() {
    return (
      <div className="container">
        {this.props.results.map((r) => (
          <div className="row" key={r.term}>
            <div className="col">
              <span>{r.term}: </span>
              <span>
                {r.status === repetitionStatus.success ? "OK" : "FAIL"}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentSet: state.repetitionState.currentSet,
  results: state.repetitionState.results,
});

// TODO: start new repetiotion from this page
//   const mapDispatchToProps = {
//     createRepetitionSet,
//   };

const connectedRep = connect(mapStateToProps, null)(RepetitionResults);

export default connectedRep;
