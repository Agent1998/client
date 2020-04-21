import React, { useState, useEffect } from 'react';
import { Button, Card, Form, } from 'react-bootstrap';
import {firestore} from '../index';
import './Datatour.css'




const Test = () => {

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
  const deleteTour = (id) => {
    firestore.collection("tour").doc(id + '').delete()
  }
  const editTour = (id) => {
    firestore.collection("tour").doc(id + '').set({ id, name, date, place,link})
  }
  const rederTour = () => {
    if (tour && tour.length)
      return tour.map((tour, index) => {
        return (
          <div class="d-flex justify-content-center">
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
                <Button variant="danger" onClick={() => deleteTour(tour.id)}>Delete</Button>
                <Button variant="warning" style={{ marginLeft: 10 }} onClick={() => editTour(tour.id)}>Edit</Button>
              </Card.Body>
            </Card>


          </>
          </div>
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
    
       
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',marginTop: 150 }}>
        <h1>รายกานแข่งขัน</h1>
        
        <Form >
          <Form.Group controlId="formGroupName">
            <Form.Label>ชื่อรายการ</Form.Label>
            <Form.Control
              type="text"
              placeholder="รายการ" value={name}
              onChange={(e) => { setName(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupImage">
            <Form.Label>วันที่</Form.Label>
            <Form.Control type="text"
              placeholder="วันที่"
              value={date}
              onChange={(e) => { setDate(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPrice">
            <Form.Label>สถานที่จัดการแข่งขัน</Form.Label>
            <Form.Control type="text"
              placeholder="สถานที่" value={place}
              onChange={(e) => { setPlace(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupDetail">
            <Form.Label>รายละเอียดเพิ่มเติม</Form.Label>
            <Form.Control type="text"
              placeholder="URL" value={link}
              onChange={(e) => { setLink(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          
        </Form>
        <Button variant="success" style={{ margin: 5, alignContent: 'center' }} onClick={addTour}>Add</Button>
        <ul style={{ display: 'flex', flex: 1, flexDirection: 'row'}}>{rederTour()}</ul>
        
      </div>
      
  );
}

export default Test;