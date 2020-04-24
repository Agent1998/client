import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase'
import './Topbar.css'
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Topbar2 = () => {

    return (
        <div >
            <Navbar bg="dark" variant="dark">
               <div className = "btn-topbar">
            <Form inline>
                
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/tournament">Tournament</Nav.Link>
                    <Nav.Link href="/other">Other</Nav.Link>
                    {/* <img  className="pic" src={firebase.auth().currentUser.photoURL}/> */}
            <Nav.Link onClick={() => firebase.auth().signOut() } href="/">Signout</Nav.Link>
                </Nav>
                </Form>
                </div> 
            </Navbar>
        </div>
           
        
    );

}

export default Topbar2;