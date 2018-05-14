import React, { Component } from 'react'
import Register from './register'
import Login from './login'
import { Grid } from 'material-ui';
import Divider from 'material-ui/Divider';

class Home extends Component {

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={4}></Grid>
        <Grid item xs={2}><Register /></Grid>
        <Grid item xs={false}>
          <Divider className="verticalDivider" />
        </Grid>
        <Grid item xs={2}><Login /></Grid>
        <Grid item xs={4}></Grid>

        {/* <Grid item md={6}>{<Register />}</Grid> */}
        {/* <Grid item md={6}>{<Login />}</Grid> */}
      </Grid>
    )
  }
}

export default Home
