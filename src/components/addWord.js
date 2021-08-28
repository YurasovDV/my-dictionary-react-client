import React, { Component } from "react";
import { connect } from "react-redux";
import { addWord } from "../actions/dictActions";
import { WordDto } from "../models/wordDto";
import * as constants from '../services/constants';

function mapDispatchToProps(dispatch) {
  return {
    addWord: (word) => dispatch(addWord(word)),
  };
}
class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      translation: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { term, translation } = this.state;
    // TODO: several translations on client side
    this.props.addWord(new WordDto(term, constants.DEFAULT_TOPIC_NAME, [translation]));
    this.setState({ term: "", translation: "" });
  }

  render() {
    const { term, translation } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <div className="row justify-content-center">
            <div className="col-4">
              <label htmlFor="term">{constants.TERM}</label>
              <input
                type="text"
                id="term"
                value={term}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="col-4">
              <label htmlFor="translation">{constants.TRANSLATION}</label>
              <input
                type="text"
                id="translation"
                value={translation}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="col-4" >
              <div style={{ height: "62px", display: "flex", alignItems: "flex-end" }}>
                <button
                  onSubmit={this.handleSubmit}
                  className="btn btn-success btn-md "
                >
                  {constants.SAVE}
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
