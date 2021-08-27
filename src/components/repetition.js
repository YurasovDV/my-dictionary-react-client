import React, { Component } from "react";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch){
    return {
        
    };
}

class Repetition extends Component {

    render(){
        return (<div> LOADING REPETITION SET </div>)
    }
}

const connectedRep = connect(null, mapDispatchToProps)(Repetition);

export default connectedRep;