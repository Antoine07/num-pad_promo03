import React from 'react';

import './Operation.scss';

class Operation extends React.Component {
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

export default Operation;