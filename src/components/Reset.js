import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetNumpad, resetGame } from '../actions/actions';

class Reset extends Component {
    constructor(props) {
        super(props);
    }

    handleReset = () => {
        this.props.resetNumpad()
    }

    handleResetGame = () => {
        this.props.resetGame()
    }

    render() {

        const { type } = this.props;

        if(type === 'resetPad')
            return (
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.handleReset}
                >
                <small>Reset Numpad</small>
                </button>
            );
        else
            return (
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.handleResetGame}
                >
                <small>Restart</small>
                </button>
            );  
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        resetNumpad: () => dispatch(resetNumpad()),
        resetGame: () => dispatch(resetGame()),
    }
};

export default connect(null, mapDispatchToProps)(Reset);