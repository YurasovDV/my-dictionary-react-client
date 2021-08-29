import React, { Component } from "react";
import { connect } from "react-redux";
import { createRepetitionSet, 
    startRepetition,
    selectOption, 
    completeRepetition
 } from '../../actions/repetitionActions';

import * as constants from '../../constants';

class Repetition extends Component {

    componentDidMount() {
        this.props.createRepetitionSet();
      }

    start = () => { this.props.start() }

    render(){

        const words = this.props.currentSet || [];

        if(words.length === 0){
            return (<div>{constants.EMPTY_DICTIONARY}</div>)
        }

        return (<div>{words.map(w => <div><div>{w.term}</div> <div> Correct: {w.translations[0]}, incorrect: {w.option} </div>  </div>)}</div>)
    }
}


const mapStateToProps = (state) => ({
    currentSet: state.repetitionState.currentSet,
  });

const mapDispatchToProps = {
    createRepetitionSet,
    startRepetition,
    selectOption,
    completeRepetition
}

const connectedRep = connect(mapStateToProps, mapDispatchToProps)(Repetition);

export default connectedRep;