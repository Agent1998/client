import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const About = () => {

    return (
        <div>
            55
            <a href="/"><button >Home</button></a>
            <a href="/about"><button >About</button></a>
            <a href="/activity"><button >Activity</button></a>
            <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </div>
    );

}

export default About;