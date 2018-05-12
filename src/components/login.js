import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 4,
};

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChangeEmail(event) {
      this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
      this.setState({password: event.target.value});
  }

  loginUser(event) {
    event.preventDefault();
    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password
      })
    }).then((response) => {
      console.log(response.json());
    })
  }

  render() {
    return (
      <form onSubmit={this.loginUser}>
        <TextField hintText="Email" value={this.state.email} name="email" onChange={this.handleChangeEmail} />
        <br/>
        <TextField hintText="Password" type="password" value={this.state.password} name="password" onChange={this.handleChangePassword} />
        <br/>
        <br/>
        <RaisedButton label="Cancel" style={style} />
        <RaisedButton label="Login" primary={true} style={style} type='submit' />
      </form>
    )
  }
}

export default Login
