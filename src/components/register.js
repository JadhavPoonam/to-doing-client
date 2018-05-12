import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

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
        <TextField hintText="First Name" value={this.state.firstName} name="firstName" onChange={this.handleChangeFirstName} />
        <br/>
        <TextField hintText="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleChangeLastName} />
        <br/>
        <TextField hintText="Email" value={this.state.email} name="email" onChange={this.handleChangeEmail} />
        <br/>
        <TextField hintText="Password" type="password" value={this.state.password} name="password" onChange={this.handleChangePassword} />
        <br/>
        <br/>
        <RaisedButton label="Cancle" style={style} />
        <RaisedButton label="Register" primary={true} style={style} type='submit' />
      </form>
    )
  }

}

export default Register
