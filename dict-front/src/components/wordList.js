import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getPage } from '../actions/dict';

class WordList extends Component
{
    componentDidMount(){
        this.props.getPage();
    }

    render(){
        if(this.props.words && this.props.words.length){
            let words = this.props.words;
            return (<ul>
                {words.map(el => (<li key={el.term}>{el.term}&nbsp;{el.translations[0]}</li>))}
            </ul>)
        }
        return (<div>No words found</div >)
    }
}



const mapStateToProps = state => ({ words: state.words });

const mapDispatchToProps = {
    getPage,
  };

export default connect(mapStateToProps, mapDispatchToProps)(WordList);