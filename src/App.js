import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Register from './components/register'
import Login from './components/login'
import todologo from './assets/todologo.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={todologo} className="App-logo" alt="logo" />
            <h1 className="App-title">ToDo-ing</h1>
          </header>
          <p className="App-intro">
          </p>
          <Register />
          <Login />
          <footer>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
