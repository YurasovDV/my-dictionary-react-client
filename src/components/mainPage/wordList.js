import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { getPage } from "../../actions/dictActions";
import WordRow from "./wordRow";
import AddWord from "./addWord";
import Paging from './paging';
import { Query } from "../../models/query";
import * as constants from "../../constants";

class WordList extends Component {
  componentDidMount() {
    this.props.getPage(new Query(this.props.skip, this.props.take));
  }
 

  render() {
    const words = this.props?.words?.page || [];

    if (words.length === 0) {
      return (
        <React.Fragment>
          <AddWord />
          <div className="text-centered warning">
            {constants.EMPTY_DICTIONARY}
          </div>
        </React.Fragment>
      );
    }

    const table = (
      <div className="container">
        <AddWord />
        <div className="row">
          <div className="col-12 text-centered">
            <h2>{constants.YOUR_DICTIONARY}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>{constants.TERM}</th>
                  <th>{constants.TRANSLATION}</th>
                  <th>{constants.STATUS}</th>
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
        <Paging getPage={this.props.getPage}  />
      </div>
    );

    return table;
  }
}

const mapStateToProps = (state) => ({
  words: state.dictState.words,
});

const mapDispatchToProps = {
  getPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
