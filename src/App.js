import React, { Component } from 'react'
import Login from './components/Login'
import './App.css'
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Tournament from './components/Tournament';
import Other from './components/Other';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Switch>
          <Route exact path="/" component={Login} /> 
          <Route exact path="/home" component={Home} />
          <Route path="/tournament" component={Tournament} />
          <Route path="/Other" component={Other} />
          <Route path="/test" component={Test}/>
        </Switch>
      </div>
    )
  }
}

export default App