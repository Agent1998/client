import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase'
import Topbar2 from './Topbar2';

const About = () => {

    return (
        <div>
            <Topbar2/>
            About
        </div>
    );

}

export default About;