import React, { Component } from 'react';;

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChangeUsername(value) {
    this.setState({
      username: value
    })
  }

  handleChangePassword(value) {
    this.setState({
      password: value
    })
  }

  handleLogin() {
      alert(`Username: ${ this.state.username } Password: ${ this.state.password }` )
 
  }



  render() {
    return (
      <div className="App">
      <input onChange={ (e) => this.handleChangeUsername(e.target.value) } placeholder="username" />
      <input onChange={ (e) => this.handleChangePassword(e.target.value)} placeholder="password"/>
      <button onClick={() => this.handleLogin() } > Login </button>
      </div>
    );
  }
}

export default Login;