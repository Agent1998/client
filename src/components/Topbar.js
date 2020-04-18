import React from 'react';
import firebase from 'firebase';
import { Link, } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Topbar = () => {
    return (
        <div>
            <div>
                <div>              
                <Link to="/"><button >Home</button></Link> 
                <Link to="/about"><button>About</button></Link>
                 <Link to="/activity"><button >Activity</button></Link>
                    {/* <img src={firebase.auth().currentUser.photoURL} />
                    <div>{firebase.auth().currentUser.displayName}</div> */}
                    <Button onClick={() => firebase.auth().signOut()}>Sign-out</Button>
                </div>
            </div>
        </div>
    );
}






export default Topbar;