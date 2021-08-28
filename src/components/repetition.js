import React, { Component } from "react";
import { connect } from "react-redux";
import { createRepetitionSet, selectOption, completeRepetition } from '../actions/repetitionActions'
import * as constants from '../services/constants';

class Repetition extends Component {

    componentDidMount() {
        this.props.createRepetitionSet();
      }

    start = () => { console.log('train start'); }

    render(){

        const words = this.props.words || [];

        if(words.length == 0){
            return (<div>{constants.EMPTY_DICTIONARY}</div>)
        }

        return (<div></div>)
    }
}


const mapStateToProps = (state) => ({
    words: state.repetitionState.words,
  });

const mapDispatchToProps = {
    createRepetitionSet,
    selectOption,
    completeRepetition
}


const connectedRep = connect(mapStateToProps, mapDispatchToProps)(Repetition);

export default connectedRep;