import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline'
import Home from './components/home'
import todologo from './assets/todologo.svg'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <CssBaseline />
          <header className="App-header">
            <img src={todologo} className="App-logo" alt="logo" />
            <h1 className="App-title">ToDo-ing</h1>
          </header>
          <p className="App-intro">
          </p>
          <Home />
          <footer>
          </footer>
        </div>
    );
  }
}

export default App;
