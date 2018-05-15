import React, { Component } from 'react'
import withToken from './withToken'
import { List, ListItem, ListItemText } from 'material-ui'

class Items extends Component {
  render() {
    const { items } = this.props;
    return (
      <List>
        {
          items.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} secondary="Jan 9, 2014" />
            </ListItem>
          ))
        }
      </List>
    )
  }
}

export default withToken(Items)
