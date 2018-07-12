import React, { Component } from 'react'
import { Grid } from 'material-ui'
import AddItem from './addItem'
import Items from './items'
import withToken from './withToken'
import Divider from 'material-ui/Divider';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    this.update = this.update.bind(this);
  }
  componentWillMount() {
    this.update()
  }
  update() {
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
      <Grid container spacing={24}>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <AddItem updateItems={this.update} />
        </Grid>
        <Grid item xs={false}>
          <Divider className="verticalDivider" />
        </Grid>
        <Grid item xs={4}>
          <Items items={this.state.items} />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    )
  }
}

export default withToken(Dashboard)
