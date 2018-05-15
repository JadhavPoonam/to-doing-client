import React, { Component } from 'react'
import withToken from './withToken'
import Items from './items'

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
      <Items items={this.state.items} />
    )
  }
}

export default withToken(Dashboard)
