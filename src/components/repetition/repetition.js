import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createRepetitionSet,
  startRepetitionTimer,
  selectOption,
  completeRepetition,
} from "../../actions/repetitionActions";

import * as constants from "../../constants";
import { repetitionStatus } from "../../models/wordDto";

import "./repetition.css";

class Repetition extends Component {
  componentDidMount() {
    this.props.createRepetitionSet();
  }

  click = (optionSelected) => {
    const currentWord = this.props.currentSet[0];
    const correct = currentWord.translations[0];

    let status =
      optionSelected === correct
        ? repetitionStatus.success
        : repetitionStatus.failOnce;

    this.props.selectOption(currentWord.term, status);
    this.props.startRepetitionTimer();
  };

  render() {
    const words = this.props.currentSet || [];

    if (this.props.results.length === constants.REPETITION_SET_LENGTH) {
      return <div>Drill ended, congrats!</div>;
    }

    if (words.length === 0) {
      return <div>{constants.EMPTY_DICTIONARY}</div>;
    }

    const w = words[0];
    return (
      <div className="bg-light w-100-h-100-minh600">
        <div className="container">
          <div className="row justify-content-around mt-150">
            <div className="col-md-auto rounded-pill bg-primary d-flex justify-content-center w-400-h-150-mt-70">
              <h1 className="align-self-center text-light overflow-hidden">
                {w.term}
              </h1>
            </div>
          </div>
          <div className="row justify-content-around mt-150">
            <div
              className="col-4 rounded-pill bg-success d-flex justify-content-center h-150"
              onClick={() => this.click(w.translations[0])}
            >
              <h2 className="align-self-center text-light overflow-hidden">
                {w.translations[0]}
              </h2>
            </div>
            <div
              className="col-4 rounded-pill bg-success d-flex justify-content-center h-150"
              onClick={() => this.click(w.option)}
            >
              <h2 className="align-self-center text-light overflow-hidden">
                {w.option}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentSet: state.repetitionState.currentSet,
  results: state.repetitionState.results,
});

const mapDispatchToProps = {
  createRepetitionSet,
  startRepetitionTimer,
  selectOption,
  completeRepetition,
};

const connectedRep = connect(mapStateToProps, mapDispatchToProps)(Repetition);

export default connectedRep;
