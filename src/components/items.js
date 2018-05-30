import React, { Component } from 'react'
import withToken from './withToken'
import { Button, Divider, List, ListItem, ListItemText, IconButton } from 'material-ui'

class Items extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <h3>To do</h3>
        <Divider />
        <List>
          {
            items.map(item => (
              <ListItem key={item.id}>
                <ListItemText primary={item.name} secondary="Jan 9, 2014" />
                <Button variant="raised" color="primary" style={{ margin: 10 }}>Edit</Button>
              </ListItem>
            ))
          }
        </List>
      </div>
    )
  }
}

export default withToken(Items)
