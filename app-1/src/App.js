import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }


  handlechange(value) {
    this.setState({
      userInput: value
    })
  }


  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.handlechange(e.target.value)} />
        <h2>{this.state.userInput}</h2>
      </div>
    );
  }
}

export default App;
