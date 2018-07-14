import React, { Component } from 'react'
import withToken from './withToken'
import { Divider, List, ListItem, TextField } from 'material-ui'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

class Items extends Component {

  constructor() {
    super();
    this.state = {
      editing: null,
      items: null
    }
    this.updateItems = this.updateItems.bind(this);
    this.updateStateValue = this.updateStateValue.bind(this);
  }

  deleteItem(id, name) {
    if (this.state && this.state.editing !== id) {
      const token = sessionStorage.getItem("auth_token");
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
    else{
      this.setState({editing: null});
    }
  }

  saveItem(item) {
    const token = sessionStorage.getItem("auth_token");
    return fetch('http://localhost:5000/api/todo/'+item.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        IsCompleted: item.IsCompleted,
        Priority: item.Priority
      })
    })
    .then(() => this.setState({editing: null}))
    .catch(err => {console.log(err); this.props.history.push("/unauthorized")})
  }

  editItem(item) {
    if(this.state.editing == null){
      this.setState({ editing: item.id });
    }
  }

  updateStateValue(val, id){
    var currentItems = this.state.items;
    currentItems = currentItems.map(item=>{
                            if(item.id === id){
                              return {
                                ...item,
                                name: val
                              }
                            }
                            else{
                              return item
                            }
                          });
                          console.log('in update: ', id, val)
    this.setState({
          items : currentItems
        });
  }

  updateItems(id){
    this.setState({ items: this.state.items.filter(item => item.id !== id)});
  }

  componentWillReceiveProps(nextProps){
    this.setState({ items: nextProps.items, editing: null});
  }

  render() {
    console.log("in render")
    if(this.state.items){
      const items = this.state.items;
      return (
        <div>
          <h3>Items on your TO DO list</h3>
          <Divider />
          {
            <List>
              {
                items.map(item => (
                  <ListItem key={item.id}>
                    <TextField label="name" value={item.name} onChange={(evt) => this.updateStateValue(evt.target.value, item.id)} disabled={this.state.editing !== item.id} />
                    {this.state.editing !== item.id && (
                      <div>
                        <IconButton variant="fab" color="primary" style={{ margin: 10 }} onClick={this.editItem.bind(this, item)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton variant="fab" color="secondary" style={{ margin: 10 }} onClick={this.deleteItem.bind(this, item.id, item.name)}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    )}
                    {this.state.editing === item.id && (
                      <div>
                        <IconButton variant="fab" color="primary" style={{ margin: 10 }} onClick={this.saveItem.bind(this, item)}>
                          <SaveIcon />
                        </IconButton>
                      </div>
                    )}

                  </ListItem>
                ))
              }
            </List>
          }
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default withToken(Items)
