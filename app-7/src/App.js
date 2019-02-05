import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'
import NewTask from './components/NewTask'

class App extends Component {
  constructor() {
    super()
    this.state = {
      myToDos: ['laundry', 'groceries'],
      userInput: ''
    }
  }



  render() {
    let list = this.state.myToDos.map( ( task, index ) => {
      return (
        <Todo key={ index } task={ task } />
      )
    })

    return (
      <div className="App">
        <h1> My To-Do List: </h1>
        <NewTask add={this.handleAddTask} />
        {list}
      </div>
    );
  }
}

export default App;
