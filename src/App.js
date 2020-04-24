import React, { Component } from 'react'
import Login from './components/Login'
import './App.css'
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Tournament from './components/Tournament';
import Other from './components/Other';
import DataTour from './components/DataTour';
import OtherAdd from './components/OtherAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Switch>
          <Route exact path="/" component={Login} /> 
          <Route exact path="/home" component={Home} />
          <Route path="/tournament" component={Tournament} />
          <Route path="/other" component={Other} />
          <Route path="/datatour" component={DataTour}/>
          <Route path="/otheradd" component={OtherAdd}/>
        </Switch>
      </div>
    )
  }
}

export default App