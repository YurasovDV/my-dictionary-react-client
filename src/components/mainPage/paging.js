import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Query } from "../../models/query";
import * as constants from "../../constants";

class Paging extends Component {
  constructor(props) {
    super(props);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  previousPage() {
    const { skip, take } = this.props;
    this.requestAnotherPage(new Query(skip - constants.ITEMS_ON_PAGE, take));
  }

  nextPage() {
    const { skip, take } = this.props;
    this.requestAnotherPage(new Query(skip + constants.ITEMS_ON_PAGE, take));
  }

  requestAnotherPage(query) {
    this.props.getPage(query);
  }

  render() {
    return (
      <div>
        <div>
          {constants.TOTAL_WORDS}: {this.props.words.total}
        </div>
        <div>
          {constants.PAGE} {this.props.skip / constants.ITEMS_ON_PAGE + 1} {" / "}
          {Math.ceil(this.props.words.total / constants.ITEMS_ON_PAGE)}
        </div>
        <button
          style={{ margin: "15px" }}
          onClick={this.previousPage}
          className="btn btn-success btn-md"
          disabled={this.props.skip < constants.ITEMS_ON_PAGE}
        >
          &lt;
        </button>
        <button
          style={{ margin: "15px" }}
          onClick={this.nextPage}
          className="btn btn-success btn-md"
          disabled={this.props.words.total <= this.props.skip + this.props.take}
        >
          &gt;
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.dictState.words,
  skip: state.dictState.skip,
  take: state.dictState.take,
});

export default connect(mapStateToProps, null)(Paging);
