import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserChoice } from '../actions/actions';

class Reset extends Component {
    constructor(props) {
        super(props);
    }

    handleReset = () => {
        this.props.sendUserChoice()
    }

    render() {

        return (
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={this.handleReset}
            >
            <small>Ok</small>
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        sendUserChoice: () => dispatch(sendUserChoice()),
    }
};

export default connect(null, mapDispatchToProps)(Reset);