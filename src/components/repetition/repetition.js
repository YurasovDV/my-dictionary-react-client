import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createRepetitionSet,
  startRepetition,
  selectOption,
  completeRepetition,
} from "../../actions/repetitionActions";

import * as constants from "../../constants";

class Repetition extends Component {
  componentDidMount() {
    this.props.createRepetitionSet();
  }

  start = () => {
    this.props.start();
  };

  render() {
    const words = this.props.currentSet || [];

    if (this.props.trainEnded) {
      return <div>Drill ended, congrats!</div>;
    }

    if (words.length === 0) {
      return <div>{constants.EMPTY_DICTIONARY}</div>;
    }

    const w = words[0];
    return (
      <div
        className="bg-light"
        style={{ width: "100%", height: "100%", minHeight: "800px" }}
      >
        <div className="container">
          <div
            className="row justify-content-around"
            style={{ marginTop: "150px" }}
          >
            <div
              className="col-md-auto rounded-pill bg-primary d-flex justify-content-center"
              style={{ height: "150px" }}
            >
              <h1 className="align-self-center" style={{ overflow: "hidden" }}>{w.term}</h1>
            </div>
          </div>
          <div
            className="row justify-content-around"
            style={{ marginTop: "150px" }}
          >
            <div
              className="col-4 rounded-pill bg-success d-flex justify-content-center"
              style={{ height: "150px" }}
            >
              <h2 className="align-self-center" style={{overflow: "hidden" }}>{w.translations[0]}</h2>
            </div>
            <div
              className="col-4 rounded-pill bg-success d-flex justify-content-center"
              style={{ height: "150px" }}
            >
              <h2 className="align-self-center" style={{ overflow: "hidden" }}>{w.option}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentSet: state.repetitionState.currentSet,
});

const mapDispatchToProps = {
  createRepetitionSet,
  startRepetition,
  selectOption,
  completeRepetition,
};

const connectedRep = connect(mapStateToProps, mapDispatchToProps)(Repetition);

export default connectedRep;
