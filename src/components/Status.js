import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Reset  from './Reset';

class Status extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { success, status, count, score } = this.props

        return (
            <div className="alert alert-primary" role="alert">
                Multiplication : {count} <br />
                Score : {score}  <br />
                Status : {status}
                {status === 'game over' ?
                (
                <div className="container">
                    <Reset type="resetGame" /> 
                </div> 
                )
                : null
                }   
            </div>
        );
    }
}

// Lecture du state global de Redux
const mapStateToProps = (state) => {

    return {
        count : state.count,
        success : state.success,
        count : state.count, 
        score : state.score,
        status : state.status
    };
  };

export default connect(mapStateToProps)(Status);