import React from "react";
import { Component } from "react";
import { deleteWord } from "../actions/dictActions";
import { statusToString } from "../models/wordDto";
import { connect } from "react-redux";
import * as constants from '../services/constants';

function mapDispatchToProps(dispatch) {
  return {
    deleteWord: (word) => dispatch(deleteWord(word.term)),
  };
}
class WordRow extends Component {

  deleteWord = () => this.props.deleteWord(this.props.model);

  render() {
    const model = this.props.model;
    return (
      <tr key={model.term}>
        <td className="text-centered">{model.term}</td>
        <td className="text-centered">{model.translations.join(", ")}</td>
        <td className="text-centered">{statusToString(model.status)}</td>
        <td className="text-centered">
          <button className="btn btn-primary m-1">{constants.RESET_STATUS}</button>
          <button className="btn btn-danger m-1" onClick={this.deleteWord}>
            {constants.DELETE}
          </button>
        </td>
      </tr>
    );
  }
}

const ConnectedWordRow = connect(null, mapDispatchToProps)(WordRow);

export default ConnectedWordRow;
