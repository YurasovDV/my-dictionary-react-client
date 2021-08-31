import React, { Component } from "react";

import "./repetition.css";

export default class OptionButton extends Component {
  render() {
    return (
      <div
        className="col-4 rounded-pill bg-success d-flex justify-content-center h-150"
        onClick={() => this.props.click(this.props.text)}
      >
        <h2 className="align-self-center text-light overflow-hidden">
          {this.props.text}
        </h2>
      </div>
    );
  }
}
