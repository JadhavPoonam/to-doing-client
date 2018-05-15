import React, { Component } from 'react'
import withToken from './withToken'
import { Divider } from 'material-ui'

class AddItem extends Component {
  render() {
    return (
      <div>
        <h3>Add Item</h3>
        <Divider />
      </div>
    )
  }
}

export default withToken(AddItem)
