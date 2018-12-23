import React, { Component } from 'react';
import './App.css';
import AutoShrinking from './components/autoshrinking';
import * as math from 'mathjs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: 0
    }
    this.buttonClicked = this.buttonClicked.bind(this);
    this.reset = this.reset.bind(this);
    this.toggle = this.toggle.bind(this);
    this.zero = this.zero.bind(this);
    this.dot = this.dot.bind(this);
    this.percentage = this.percentage.bind(this);
    this.chooseOperand = this.chooseOperand.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  buttonClicked(digit) {
    (this.state.input === 0)
    ? (this.setState({input: digit}))
    : (this.setState({input: this.state.input + digit}));
  }

  dot(operator) {
    (this.setState({input: this.state.input + operator}));
  }

  zero(digit) {
    (this.state.input === 0)
    ? (this.setState({input: 0}))
    : (this.setState({input: this.state.input + digit}));
  }

  percentage(operator) {
    this.setState({input: this.state.input / 100}); 
  }

  chooseOperand(operator) {
    (this.setState({input: this.state.input + operator}));
  }


  evaluate() {
    try {
        math.eval(this.state.input);
    }
    catch(e) {
      if (e) {
        this.setState({input: 'Error'});
        return 0;
      }
    }
    this.setState({input: math.eval(this.state.input)});
  }
  
  reset(digit) {
    this.setState({ input: 0});
  }

  toggle() {
    let notNumberOnly = /[+%/*.]/;
    if (notNumberOnly.test(this.state.input))
    { 
      this.setState({input: 0});
    }    
    else {
        this.setState({input: this.state.input * -1});
    }
  }

  render() {
    return (
      <div className="App">

        <div className="container">
          <AutoShrinking>{this.state.input}</AutoShrinking>
          <div className="row">
            <div onClick={() => this.reset('C')} className="col dark-grey">C</div>
            <div onClick={() => this.toggle('+/-')} className="col dark-grey">+/-</div>
            <div onClick={() => this.percentage('%')} className="col dark-grey">%</div>
            <div onClick={() => this.chooseOperand('/')} className="col orange">/</div>
          </div>
          <div className="row">
            <div onClick={() => this.buttonClicked('7')} className="col light-grey">7</div>
            <div onClick={() => this.buttonClicked('8')} className="col light-grey">8</div>
            <div onClick={() => this.buttonClicked('9')} className="col light-grey">9</div>
            <div onClick={() => this.chooseOperand('*')} className="col orange">x</div>
          </div>
          <div className="row">
            <div onClick={() => this.buttonClicked('4')} className="col light-grey">4</div>
            <div onClick={() => this.buttonClicked('5')} className="col light-grey">5</div>
            <div onClick={() => this.buttonClicked('6')} className="col light-grey">6</div>
            <div onClick={() => this.chooseOperand('-')} className="col orange">-</div>
          </div>
          <div className="row">
            <div onClick={() => this.buttonClicked('1')} className="col light-grey">1</div>
            <div onClick={() => this.buttonClicked('2')} className="col light-grey">2</div>
            <div onClick={() => this.buttonClicked('3')} className="col light-grey">3</div>
            <div onClick={() => this.chooseOperand('+')} className="col orange">+</div>
          </div>
          <div className="row">
            <div onClick={() => this.zero('0')} className="col-6 light-grey">0</div>
            <div onClick={() => this.dot('.')} className="col-3 light-grey">.</div>
            <div onClick={() => this.evaluate('=')} className="col-3 orange">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
