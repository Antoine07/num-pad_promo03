import React from 'react';

import { connect } from 'react-redux';
import { sendNumber } from '../actions/actions';

import './Message.scss';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render (){
        const { numbers } = this.props;
        
        return ( 
            <div className="alert alert-primary" role="alert">
                Calcul : {numbers.join('')}
            </div>
            )
    }

}

export default Message;