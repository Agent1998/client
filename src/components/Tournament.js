import React, { useState, useEffect } from 'react';
import { Button, Card, Form, } from 'react-bootstrap';
import {firestore} from '../index';
import Topbar2 from './Topbar2';



const Tournament = () => {

  const [tour, setTour] = useState([])
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [place, setPlace] = useState('')
  const [link, setLink] = useState('')


  useEffect(() => {
    retrivData()
  }, [])

  const retrivData = () => {
    firestore.collection("tour").onSnapshot((snapshot) => {
      let myTour = snapshot.docs.map(d => {
        const { id, name, date, place,link } = d.data()
        return { id, name, date, place,link }
      })
      setTour(myTour)

    })
  }
  const rederTour = () => {
    if (tour && tour.length)
      return tour.map((tour, index) => {
        return (
          <>
            <Card style={{ width: '18rem', marginTop: 10 }}>
              
              <Card.Body>
                <Card.Title> รายการ : {tour.name}</Card.Title>
                <Card.Text>
                  วันที่ : {tour.date}
                </Card.Text>
                <Card.Text>
                  สถานที่ : {tour.place}
                </Card.Text>
                <Card.Text>
                  รายละเอียดเพิ่มเติม : {tour.link} 
                </Card.Text>
               
              </Card.Body>
            </Card>


          </>
        )
      })
    else
      return <li>No Tour</li>
  }
  const addTour = () => {
    let id = (tour.length === 0) ? 1 : tour[tour.length - 1].id + 1
    firestore.collection("tour").doc(id + '').set({ id, name, date, place,link })
  }
  return (
    <>
       <Topbar2/>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>รายการแข่งขัน</h1>
        
        
        <ul style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>{rederTour()}</ul>
      </div>
    </>
  );
}

export default Tournament;