import React from 'react';

import './Message.scss';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render (){
        const { message } = this.props;

        let classes = ["alert"];
        
        classes.push(message.type);

        return ( 
            <div className={classes.join(' ')} role="alert">
               {message.text}
            </div>
            )
    }
}

export default Message;