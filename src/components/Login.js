import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './Login.css'; 
import './Test.js';
import Home from './Home';
import Activity from './Activity';
import About from './About';


const firebaseConfig = {
    apiKey: "AIzaSyDSiIqcTkyBmwkCWni3M8AAuAATNdmFPS0",
    authDomain: "miniproject-126e1.firebaseapp.com",
    databaseURL: "https://miniproject-126e1.firebaseio.com",
    projectId: "miniproject-126e1",
    storageBucket: "miniproject-126e1.appspot.com",
    messagingSenderId: "514535751787",
    appId: "1:514535751787:web:0c9b623bafdc18cbd2b12e",
    measurementId: "G-C9SP5QGVE8"
};


firebase.initializeApp(firebaseConfig);

class Login extends Component {

  state = {
    isSignedIn: false 
  };

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {

      signInSuccess: () => false
    }
  };
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="container">
          <h1>Login</h1>
          <h1> with FB Google E-mail</h1>

          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div className="container">
        {/* <h1>FirebaseUI-React</h1>
        <h1> with Firebase Authentication</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p> */}
          {/* <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/> */}
          {/* <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        <Test /> */}
         <Router>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/activity" component={Activity} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default Login;







