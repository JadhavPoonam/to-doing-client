import React, { Component } from 'react'
import { Grid } from 'material-ui'

import AddItem from './addItem'
import Items from './items'
import withToken from './withToken'

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
      <Grid container>
        <Grid item md={6}>
          <AddItem />
        </Grid>
        <Grid item md={6}>
          <Items items={this.state.items} />
        </Grid>
      </Grid>
    )
  }
}

export default withToken(Dashboard)
