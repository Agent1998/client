import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase'
import Topbar from './Topbar';

const Topbar2 = () => {

    return (
        <div>
            <Topbar/>
            <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </div>
    );

}

export default Topbar2;