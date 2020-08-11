import React from 'react';
import { Button, Form, Container, Row, Col, Table } from 'react-bootstrap';
import GuessNumberSlot from './Components/GuessNumberSlot.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { answer : null, number1 : 0,  number2 : 0, number3 : 0, number4 : 0 };
  }

  getDigit = (digitData, id) => {
    if(id == 1) {
      this.setState({ number1 : digitData });
    }
    else if(id == 2) {
      this.setState({ number2 : digitData });
    }
    else if(id == 3) {
      this.setState({ number3 : digitData });
    }
    else if(id == 4) {
      this.setState({ number4 : digitData });
    }
    
  }

  componentDidMount() {
    let digit1 = Math.floor(Math.random() * 10);
    let digit2 = Math.floor(Math.random() * 10);
    let digit3 = Math.floor(Math.random() * 10);
    let digit4 = Math.floor(Math.random() * 10);

    while(this.isSame(digit1, digit2, digit3, digit4)) {
      digit1 = Math.floor(Math.random() * 10);
      digit2 = Math.floor(Math.random() * 10);
      digit3 = Math.floor(Math.random() * 10);
      digit4 = Math.floor(Math.random() * 10);
    }

    this.setState({ answer : [digit1, digit2, digit3, digit4] });
  }

  isSame = (d1, d2, d3, d4) => {
    if(d1==d2||d1==d3||d1==d4){
      return true;
    }
    if(d2==d3||d2==d4){
        return true;
    }
    if(d3==d4){
        return true;
    }
        
    return false;

  }

  getResultString = () => {
    let exactCounter = 0;
    let partialCounter = 0;
    let guess = [this.state.number1, this.state.number2, this.state.number3, this.state.number4];
    
    console.log(guess);
    console.log(this.state.answer);
    for(let i = 0; i < guess.length; i++) {
        if(guess[i] == this.state.answer[i]) {
            exactCounter++;
        }
    }
    
    for(let i = 0; i < guess.length; i++) {
      for(let k = 0; k < guess.length; k++) {
        if(this.state.answer[k] == guess[i]) {
          partialCounter++;
          break;
        }
      }
    }
    
    partialCounter = partialCounter - exactCounter;
        
    return "e:" + exactCounter + ":p:" + partialCounter;
  }

  onSubmit = () => {
    let resultString = this.getResultString();
    document.getElementById("table").insertAdjacentHTML("beforeend", "<tr>" + this.state.number1 + this.state.number2 + 
      this.state.number3 + this.state.number4 + " : " + resultString + "</tr>");
  }

  render() {
    
    return (
      <div>
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <td><GuessNumberSlot getDigit = {this.getDigit} id = {1} /></td>
              <td><GuessNumberSlot getDigit = {this.getDigit} id = {2} /></td>
              <td><GuessNumberSlot getDigit = {this.getDigit} id = {3} /></td>
              <td><GuessNumberSlot getDigit = {this.getDigit} id = {4} /></td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={this.onSubmit}>
          Submit
        </Button>
        <Table id="table">
        </Table>
      </div>
    );
  };
}

export default App;
