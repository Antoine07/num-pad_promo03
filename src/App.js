import React from 'react';

import { connect } from 'react-redux';

import './App.css';

import Number from './components/Number';

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){

    const numbers = [
        ...Array(10).keys()
      ].reverse();

    console.log(this.props);

    return (
      <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="container-number">
            {numbers.map((number, index) =>
              <Number number={number} />
            )}
          </div>
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