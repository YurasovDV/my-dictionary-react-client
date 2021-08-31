import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createRepetitionSet,
  startRepetitionTimer,
  selectOption,
  completeRepetition,
} from "../../actions/repetitionActions";

import * as constants from "../../constants";
import RepetitionService from "../../services/repetition.service";
import { repetitionStatus } from "../../models/wordDto";
import OptionButton from "./optionButton";

import "./repetition.css";

class Repetition extends Component {
  componentDidMount() {
    this.props.createRepetitionSet();
  }

  componentDidUpdate() {
    if(!RepetitionService.drillCompleted(this.props)){
      this.props.startRepetitionTimer();
    }
  }

  click = (optionSelected) => {
    const currentWord = this.props.currentSet[0];
    const correct = currentWord.translations[0];

    let status =
      optionSelected === correct
        ? repetitionStatus.success
        : repetitionStatus.failOnce;

    this.props.selectOption(currentWord.term, status);
    // could be internal timer with setTimeout, but it's already done
    this.props.startRepetitionTimer();
  };

  render() {
    const words = this.props.currentSet || [];

    if (words.length === 0) {
      return <div>{constants.EMPTY_DICTIONARY}</div>;
    }

    const currentWord = words[0];

    const optsShuffled = [currentWord.translations[0], currentWord.option];
    if (Math.random() >= 0.5) {
      optsShuffled.reverse();
    }

    return (
      <div className="bg-light w-100-h-100-minh600">
        <div className="container">
        <div className="row justify-content-around">
        <div className="col-md-auto">{words.length} words till end</div>
        </div>
          <div className="row justify-content-around mt-150">
            <div className="col-md-auto rounded-pill bg-primary d-flex justify-content-center w-400-h-150-mt-70">
              <h1 className="align-self-center text-light overflow-hidden">
                {currentWord.term}
              </h1>
            </div>
          </div>
          <div className="row justify-content-around mt-150">
            {optsShuffled.map((text) => (
              <OptionButton text={text} click={this.click} key={text} />
            ))}
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
