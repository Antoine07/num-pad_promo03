import React from 'react';

import { connect } from 'react-redux';

import './App.css';

import Number from './components/Number';
import Message from './components/Message';
import Reset from './components/Reset';

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){

    const { values } = this.props;

    const numbers = [
        ...Array(10).keys()
      ].reverse();

    return (
    <div className="container">
     <Message numbers={values} />
      <div className="row">
        <div className="col-md-8">
          <div className="container-number">
            {numbers.map((number, index) =>
              <Number key={index} number={number} />
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
              <Reset />
        </div>
      </div>
    </div>
    )
  }
}

// Lecture du state global de Redux
const mapStateToProps = (state) => {

  return {
   ...state
  };
};

export default connect(mapStateToProps)(App);