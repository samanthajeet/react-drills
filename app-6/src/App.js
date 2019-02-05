import React, { Component } from 'react';
import './App.css';

import Todo from './components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      userInput: ''
    }
  }


  render() {
    return (
      <div className="App">
      <h1>My to-do list:</h1>
      <Todo />
      <input value=/>

      </div>
    );
  }
}

export default App;
