import React from 'react';

import { connect } from 'react-redux';
import { sendNumber } from '../actions/actions';

import './Number.scss';

class Number extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNumber = () => {
        this.props.submitNumber(this.props.number);
    }

    render (){

        const { number } = this.props

        return ( 
            <button
                type="button"
                class="btn btn-dark"
                onClick={this.handleNumber}
            >
                {number}
            </button>
            )
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        submitNumber: (number) => dispatch( sendNumber( number ) )
    }
};

export default connect(null, mapDispatchToProps)(Number);