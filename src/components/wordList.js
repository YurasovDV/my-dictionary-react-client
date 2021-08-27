import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { getPage } from "../actions/dict";
import WordRow from "./wordRow";
import AddWord from "./addWord";
import { Query } from "../models/query";

class WordList extends Component {
  componentDidMount() {
    this.props.getPage();
  }

  constructor(props) {
    super(props);

    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  previousPage() {
    const { skip, take } = this.props;
    if (skip >= 20) {
      this.requestAnotherPage(new Query(skip - 20, take));
    }
  }

  nextPage() {
    const { skip, take } = this.props;
    this.requestAnotherPage(new Query(skip + 20, take));
  }

  requestAnotherPage(query) {
    this.props.getPage(query);
  }

  render() {
    const words = this.props.words || [];

    var text = (this.props && this.props.error) || "no error";

    if (words.length === 0) {
      return (
        <React.Fragment>
          <AddWord />
          <div className="text-centered warning">No words found</div>
        </React.Fragment>
      );
    }

    const table = (
      <div className="container">
        <AddWord />
        <div className="row">
          <div className="col-12 text-centered">
            <h2>Your dictionary</h2>
            <span>{text}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Translations</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {words.map((el) => (
                  <WordRow model={el} key={el.term} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <button
            style={{ margin: "15px" }}
            onClick={this.previousPage}
            className="btn btn-success btn-md "
          >
            &lt;
          </button>
          <button
            style={{ margin: "15px" }}
            onClick={this.nextPage}
            className="btn btn-success btn-md "
          >
            &gt;
          </button>
        </div>
      </div>
    );

    return table;
  }
}

const mapStateToProps = (state) => ({
  words: state.dictState.words,
  skip: state.dictState.skip,
  take: state.dictState.take,
  // temporary
  error: state.dictState.error,
});

const mapDispatchToProps = {
  getPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
