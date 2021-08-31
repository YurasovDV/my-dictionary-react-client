import React, { Component } from "react";
import { connect } from "react-redux";

import { repetitionStatus } from "../../models/wordDto";

import "./repetition.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export class RepetitionResults extends Component {
  isSuccess = (r) => r.repetitionStatus === repetitionStatus.success;

  render() {
    const toIcon = (res) =>
      this.isSuccess(res) ? (
        <FontAwesomeIcon icon={faThumbsUp} style={{ color: "green" }} />
      ) : (
        <FontAwesomeIcon icon={faThumbsDown} style={{ color: "red" }} />
      );

    return (
      <div className="container">
        <span>
          Correct: {this.props.results.filter(this.isSuccess).length} of{" "}
          {this.props.results.length}
        </span>
        {this.props.results.map((r) => (
          <div className="row" key={r.term}>
            <div className="col-6">{r.term}</div>
            <div className="col-6">{toIcon(r)}</div>
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
