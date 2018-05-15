import React, { Component } from 'react'
import withToken from './withToken'
import { Button, Divider, TextField } from 'material-ui'

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
        <TextField label="name" value={this.state.name} onChange={this.handleChangeName('name')} /><br />
        <Button variant="raised" color="primary" style={{ margin: 10 }} onClick={this.addItem}>Add</Button>
      </div>
    )
  }
}

export default withToken(AddItem)
