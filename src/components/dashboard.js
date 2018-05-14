import React, { Component } from 'react'
import withToken from './withToken'
import { List, ListItem, ListItemText } from 'material-ui'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  componentWillMount() {
    const auth_token = sessionStorage.getItem("auth_token");
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    }
    return fetch('http://localhost:5000/api/todo/getall', {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => this.setState({ items: data }))
      .catch(err => false)
  }
  render() {
    return (
      <List>
        {
          this.state.items.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} secondary="Jan 9, 2014" />
            </ListItem>
          ))
        }
      </List>
    )
  }
}

export default withToken(Dashboard)
