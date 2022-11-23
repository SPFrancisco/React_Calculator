import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import CEButton from './components/CEButton';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNum: "",
      currentNum: "",
      operator: ''
    };
  }

  addToInput = value => {
    this.setState({ input: this.state.input + value });
  };

  addZeroToInput = value => {
    // Confirmando que haya algún valor previo ingresado
    if(this.state.input !== "") {
      this.setState({ input: this.state.input + value});
    }
  };

  addDecimal = value => {
    // Confirmando que no se repita el punto
    if(this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + value});
    }
  };

  clearInput = () => {
    this.setState({ input: ""});
  };

  add = () => {
    this.state.previousNum = this.state.input;
    this.setState({ input: ""});
    this.state.operator = "plus";
  };

  subtract = () => {
    this.state.previousNum = this.state.input;
    this.setState({ input: ""});
    this.state.operator = "subtract";
  };

  multiply = () => {
    this.state.previousNum = this.state.input;
    this.setState({ input: ""});
    this.state.operator = "multiply";
  };

  divide = () => {
    this.state.previousNum = this.state.input;
    this.setState({ input: ""});
    this.state.operator = "divide";
  };

  evaluate = () => {
    this.state.currentNum = this.state.input;
    let decimal = false;
    if(this.state.previousNum.indexOf(".") !== -1 || 
      this.state.currentNum.indexOf(".") !== -1){
        decimal = true;
    }

    if (this.state.operator === "plus") {
      if(!decimal){
        this.setState({
          input: parseInt(this.state.previousNum) + 
            parseInt(this.state.currentNum)
      });}
      this.setState({
        input: parseFloat(this.state.previousNum) + 
          parseFloat(this.state.currentNum)
      });
    }
    if (this.state.operator === "subtract") {
      if(!decimal){
        this.setState({
          input: parseInt(this.state.previousNum) - 
            parseInt(this.state.currentNum)
      });}
      this.setState({
        input: parseFloat(this.state.previousNum) - 
          parseFloat(this.state.currentNum)
      });
    }
    if (this.state.operator === "multiply") {
      if(!decimal){
        this.setState({
          input: parseInt(this.state.previousNum) * 
            parseInt(this.state.currentNum)
      });}
      this.setState({
        input: parseFloat(this.state.previousNum) * 
          parseFloat(this.state.currentNum)
      });
    }
    if (this.state.operator === "divide") {
      if(!decimal & 
        (parseInt(this.state.previousNum) % 
        parseInt(this.state.currentNum)) === 0){
        this.setState({
          input: parseInt(this.state.previousNum) / 
            parseInt(this.state.currentNum)
      });}
      this.setState({
        input: parseFloat(this.state.previousNum) / 
          parseFloat(this.state.currentNum)
      });
    }
    
  };

  render() {
  return (
    <div className="App">
      <div className="calc-wrapper">
      <div className="row">
        <Input>{this.state.input}</Input>
      </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.divide}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.subtract}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.evaluate}>=</Button>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.add}>+</Button>
        </div>
        <div className="row">
          <CEButton handleClear={this.clearInput}>CE</CEButton>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
