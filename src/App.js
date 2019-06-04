import React from 'react';

import { connect } from 'react-redux';

import './App.css';

import Number from './components/Number';
import Operation from './components/Operation';
import Message from './components/Message';
import Reset from './components/Reset';
import Multiplication from './components/Multiplication';
import Submit from './components/Submit';
import Status from './components/Status';

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){

    const { values, multiplication, success, score, status, message, isMessage } = this.props;

    const numbers = [
        ...Array(10).keys()
      ].reverse();

    if(status === "progress")
      return (
      <div className="container">
        { isMessage? <Message message={message} /> : null }
        <Multiplication multiplication={multiplication} />
        <Operation numbers={values} />
        <Status />
          <div className="row">
            <div className="col-md-8">
              <div className="container-number">
                {numbers.map((number, index) =>
                  <Number 
                    key={index} 
                    number={number} 
                  />
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
                  <Reset type="resetPad" />
                  <Submit />
            </div>
          </div>
      </div>
      )
    else
      return <Status />
  }
}

// Lecture du state global de Redux
const mapStateToProps = (state) => {

  return {
   ...state
  };
};

export default connect(mapStateToProps)(App);