import React from 'react';

class Multiplication extends React.Component {
    constructor(props) {
        super(props);
    }

    render (){
        const { num1, num2 } = this.props.multiplication;
        
        return ( 
            <div className="alert alert-primary" role="alert">
                Donnez le résultat de : {num1} X {num2}
            </div>
        )
    }

}

export default Multiplication;