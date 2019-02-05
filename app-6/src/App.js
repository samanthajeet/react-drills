import React, { Component } from 'react';
import './App.css';

import Todo from './components/Todo'



class App extends Component {
  constructor(){
    super()
    this.state = {
      myToDos: ['buy groceries', 'call mom'],
      userInput: ''
    }
  }


  handleChange(value) {
    this.setState({
      userInput: value
    })
  }

  addToDo = () => {
    this.setState ({
      myToDos: [... this.state.myToDos, this.state.userInput],
      userInput: ''
    })
  }


  render() {
    let list = this.state.myToDos.map( ( task, index ) => {
      return (
        <Todo key={ index } task={ task } />
      )
    })

    return (
      
      <div className="App">
      <h1>My to-do list:</h1>

      <input value={this.state.userInput}
      onChange={ (e) => this.handleChange(e.target.value)} 
      placeholder='Task'  />
      <button onClick={ this.addToDo }> Add New Task </button>

      {list}

      </div>
    );
  }
}

export default App;
