import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetNumpad } from '../actions/actions';

class Reset extends Component {
    constructor(props) {
        super(props);
    }

    handleReset = () => {
        this.props.resetNumpad()
    }

    render() {

        return (
            <button 
                type="button" 
                className="btn btn-danger"
                onClick={this.handleReset}
            >
            <small>Reset Numpad</small>
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        resetNumpad: () => dispatch(resetNumpad()),
    }
};

export default connect(null, mapDispatchToProps)(Reset);