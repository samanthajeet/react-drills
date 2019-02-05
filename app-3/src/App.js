import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: ['beef', 'pizza', 'soda', 'cake', 'chips', 'bbq', 'candy', 'can', 'fanta'],
      userInput: ''
    }
  }


  handleChange(value) {
    this.setState({
      userInput: value
    })
  }




  render() {
    const foodDisplay = this.state.foods.filter( (food) => food.includes(this.state.userInput)).map( (food, index) => {
      return(
        <h1 key={index}> {food} </h1>
      )
    })

    return (
      <div className="App">
      <input onChange={ (e) => this.handleChange(e.target.value)  } />
      {foodDisplay}
      </div>
    );
  }
}

export default App;
