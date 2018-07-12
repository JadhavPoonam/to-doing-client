import React, { Component } from 'react'
import withToken from './withToken'
import { Divider, TextField } from 'material-ui'
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
});

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      IsCompelete: "false",
      Priority: "10"
    }
    this.addItem = this.addItem.bind(this);
    this.reset = this.reset.bind(this);
  }
  reset() {
    this.setState({
      name: "",
      IsCompelete: "false",
      Priority: "10"
    })
  }
  handleChangeName = name => (event) => {
    this.setState({ [name]: event.target.value })
  }
  addItem() {
    const token = sessionStorage.getItem("auth_token");
    if (this.state) {
      return fetch('http://localhost:5000/api/todo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          name: this.state.name,
          IsCompleted: this.state.IsCompleted,
          Priority: this.state.Priority
        })
      })
      .then(() => this.props.updateItems())
      .then(() => this.reset())
      .catch(err => this.props.history.push("/unauthorized"))
    }

  }
  render() {
    return (
      <div>
        <h3>Add Item</h3>
        <Divider />
        <TextField label="name" value={this.state.name} onChange={this.handleChangeName('name')} />
        <MuiThemeProvider theme={theme}>
          <Button variant="raised" color="primary" style={{ margin: 10 }} onClick={this.addItem}>Add</Button>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withToken(AddItem)
