import React from "react";
import { Component } from "react";
import { statusToString } from "../models/wordDto";

export default class WordRow extends Component {
  render() {
      const model = this.props.model;
    return (
      <tr key={model.term}>
        <td className="text-centered">{model.term}</td>
        <td className="text-centered">{model.translations.join(", ")}</td>
        <td className="text-centered">{statusToString(model.status)}</td>
        <td className="text-centered">
          <button className="btn btn-primary m-1">Edit status</button>
          <button className="btn btn-danger m-1">Delete</button>
        </td>
      </tr>
    );
  }
}
