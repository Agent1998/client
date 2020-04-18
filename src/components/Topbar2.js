import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase'
import Topbar from './Topbar';
import './Topbar.css'

const Topbar2 = () => {

    return (
        <div className = 'Topbar'>
           <div className="btn-topbar"><Topbar/></div> 
           <div className="btn-signout"><button onClick={() => firebase.auth().signOut()}>Sign-out</button></div>
        </div>
    );

}

export default Topbar2;