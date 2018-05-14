import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const style = {
  margin: 4,
};

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.registerUser = this.registerUser.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeFirstName(event) {
      this.setState({firstName: event.target.value.toUpperCase()});
  }

  handleChangeLastName(event) {
      this.setState({lastName: event.target.value.toUpperCase()});
  }

  handleChangeEmail(event) {
      this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
      this.setState({password: event.target.value});
  }

  registerUser(event) {
    event.preventDefault();
    //alert('Form was submitted: ' + this.state.firstName + " " + this.state.lastName + " " + this.state.email + " " + this.state.password);
    fetch('http://localhost:5000/api/accounts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password
      })
    }).then((response) => {
      console.log(response.json());
    })
  }

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <Card>
          <CardContent>
            <Typography className="cardTitle" color="textSecondary">
              Sign Up
            </Typography>
            <TextField label="First Name" value={this.state.firstName} name="firstName" onChange={this.handleChangeFirstName} />
            <br/>
            <TextField label="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleChangeLastName} />
            <br/>
            <TextField label="Email" value={this.state.email} name="email" onChange={this.handleChangeEmail} />
            <br/>
            <TextField label="Password" type="password" value={this.state.password} name="password" onChange={this.handleChangePassword} />
            <br/>
            <br/>
          </CardContent>
          <CardActions>
            <Button variant="raised" style={style}>Cancel</Button>
            <Button variant="raised" color="primary" style={style} type='submit'>Register</Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

export default Register
