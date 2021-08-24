import React, { Component } from "react";
import { connect } from "react-redux";
import {addWord} from '../actions/dict';

function mapDispatchToProps(dispatch){
    return {
        addWord: word => dispatch(addWord(word))
    };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { term } = this.state;
    this.props.addWord({ term });
    this.setState({ term: "" });
  }

  render() {
    const { term } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="term">Term</label>
          <input
            type="text"
            id="term"
            value={term}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}


const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;