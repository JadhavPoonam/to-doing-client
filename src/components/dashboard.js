import React, { Component } from 'react'
import withToken from './withToken'

class Dashboard extends Component {

  render() {
    return <p>Welcome to Dashboard!</p>
  }
}

export default withToken(Dashboard)
