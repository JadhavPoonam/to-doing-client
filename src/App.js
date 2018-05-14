import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline'
import Home from './components/home'
import Dashboard from './components/dashboard'
import Unauthorized from './components/unauthorized'
import todologo from './assets/todologo.svg'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/home" component={Home}/>
              <Route path="/unauthorized" component={Unauthorized} />
              <Route path="/dashboard" component={Dashboard}/>
              {/* <Route exact path="/*" component={PageNotFound}/> */}
            </Switch>
          </Router>
          <footer>
          </footer>
        </div>
    );
  }
}

export default App;
