import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Redirect } from 'react-router-dom'

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

  toJSON(data) {
    return data.json()
  }

  setAuthTokenSessionStorage(data) {
    sessionStorage.setItem("auth_token", JSON.parse(data).auth_token);
  }

  loginUser(event) {
    event.preventDefault();
    return fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password
      })
    })
    .then(this.toJSON)
    .then(this.setAuthTokenSessionStorage)
    .then(() => {
      console.log("in dashboard redirect");
      return <Redirect to="/dashboard" />
    }
   )
  }


  render() {
    return (
      <form onSubmit={this.loginUser}>
        <Card>
          <CardContent>
            <Typography className="cardTitle" color="textSecondary">
            Log In
            </Typography>
            <TextField label="Email" value={this.state.email} name="email" onChange={this.handleChangeEmail} />
            <br/>
            <TextField label="Password" type="password" value={this.state.password} name="password" onChange={this.handleChangePassword} />
            <br/>
            <br/>
          </CardContent>
          <CardActions>
            <Button variant="raised" style={style}>Cancel</Button>
            <Button variant="raised" color="primary" style={style} type='submit'>Login</Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

export default Login
