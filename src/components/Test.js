import React, { useState, useEffect } from 'react';
import { Button, Card, Form, } from 'react-bootstrap';
import {firestore} from '../index';
import './Datatour.css'
import TopbarAdd from './TopbarAdd';




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
  
  const rederTour = () => {
    if (tour && tour.length)
      return tour.map((tour, index) => {
        return (
          <div class="d-flex justify-content-center">
          <>
          
            <Card style={{ width: '25rem', marginTop: 10 }}>
              
              <Card.Body>
                <Card.Title className ="text"> รายการ : {tour.name}</Card.Title>
                <Card.Text className ="text">
                  วันที่ : {tour.date}
                </Card.Text>
                <Card.Text className ="text">
                  สถานที่ : {tour.place}
                </Card.Text>
                <Card.Text className ="text">
                  รายละเอียดเพิ่มเติม : {tour.link} 
                </Card.Text>
                <Button variant="danger" onClick={() => deleteTour(tour.id)}>Delete</Button>
                
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
    <>
      <TopbarAdd/> 
      <div >
        <h1>รายกานแข่งขัน</h1>
        
        <Form className ="center">
          <Form.Group controlId="formGroupName">
            <Form.Label className ="text">ชื่อรายการ</Form.Label>
            <Form.Control
              type="text"
              placeholder="รายการ" value={name}
              onChange={(e) => { setName(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupDate">
            <Form.Label className ="text">วันที่</Form.Label>
            <Form.Control type="text"
              placeholder="วันที่"
              value={date}
              onChange={(e) => { setDate(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPrice">
            <Form.Label className ="text">สถานที่จัดการแข่งขัน</Form.Label>
            <Form.Control type="text"
              placeholder="สถานที่" value={place}
              onChange={(e) => { setPlace(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupDetail">
            <Form.Label className ="text">รายละเอียดเพิ่มเติม</Form.Label>
            <Form.Control type="text"
              placeholder="URL" value={link}
              onChange={(e) => { setLink(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          
        </Form>
        <Button variant="primary" style={{ margin: 5, alignContent: 'center' }} onClick={addTour}>Add</Button>
        <ul className="discard">{rederTour()}</ul>
        
      </div>
      </>  
  );
}

export default Test;