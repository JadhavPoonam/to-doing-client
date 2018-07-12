import React, { Component } from 'react'
import withToken from './withToken'
import { Button, Divider, List, ListItem, ListItemText, IconButton } from 'material-ui'

class Items extends Component {

  constructor() {
    super();
    this.state = {
      items: null
    }
    this.updateItems = this.updatedItems.bind(this);
  }

  deleteItem(id) {
    const token = sessionStorage.getItem("auth_token");
    if (this.state) {
      return fetch('http://localhost:5000/api/todo/'+id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(() => this.updateItems(id))
      .catch(err => {console.log(err); this.props.history.push("/unauthorized")})
    }
  }

  updatedItems(id){
    this.setState({ items: this.state.items.filter(item=>item.id !== id)});
  }

  componentWillReceiveProps(nextProps){
    this.setState({ items: nextProps.items});
  }

  render() {
    if(this.state.items){
      const { items } = this.state;
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
                  <Button variant="raised" color="secondary" style={{ margin: 10 }} onClick={this.deleteItem.bind(this, item.id)}>Delete</Button>
                </ListItem>
              ))
            }
          </List>
        </div>
      )
    }
    else{
      return null
    }
  }
}

export default withToken(Items)
