import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase'
import './Topbar.css'
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const TopbarAdd = () => {

    return (
        <div >
            <Navbar bg="dark" variant="dark">
               <div className = "topbaradd">
            <Form inline>
                {/* <Navbar.Brand href="/home">Home</Navbar.Brand> */}
                <Nav className="mr-auto">
                    <Nav.Link href="/datatour">DataTour</Nav.Link>
                    <Nav.Link href="/otheradd">OtherAdd</Nav.Link>
                    {/* <img  className="pic" src={firebase.auth().currentUser.photoURL}/> */}
            <Nav.Link onClick={() => firebase.auth().signOut() } href="/">Signout</Nav.Link>
                </Nav>
                </Form>
                </div> 
            </Navbar>
        </div>
           
        
    );

}

export default TopbarAdd;