import React from 'react';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';

const Topbar = () => {
    return (
        <div>
            <div>
                <div>              
                <a href="/"><button >Home</button></a>
                <a href="/about"><button >About</button></a>
                <a href="/activity"><button >Activity</button></a>
               
                    {/* <img src={firebase.auth().currentUser.photoURL} />
                    <div>{firebase.auth().currentUser.displayName}</div> */}
                    <Button onClick={() => firebase.auth().signOut()}>Sign-out</Button>
                </div>
            </div>
        </div>
    );
}






export default Topbar;