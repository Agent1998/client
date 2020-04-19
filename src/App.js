import React, { Component } from 'react'
import Login from './components/Login'
import './App.css'
import { BrowserRouter as Switch, Route, } from "react-router-dom";
import Home from './components/Home';
import Activity from './components/Activity';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Switch>
          <Route exact path="/" component={Login} /> 
          <Route exact path="/home" component={Home} />
          <Route path="/activity" component={Activity} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}

export default App