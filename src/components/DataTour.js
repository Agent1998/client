import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Navbar, Nav, FormControl } from 'react-bootstrap';

const DataTour = (props) => {

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
          <>
            <Card style={{ width: '18rem', marginTop: 10 }}>
              <Card.Img variant="top" src={task.image} />
              <Card.Body>
                <Card.Title> รายการ : {tour.name}</Card.Title>
                <Card.Text>
                  วันที่ : {tour.date}
                </Card.Text>
                <Card.Text>
                  สถานที่ : {tour.place}
                </Card.Text>
                <Card.Text>
                  รายละเอียดเพิ่มเติม : {tour.link} ชิ้น
                </Card.Text>
                <Button variant="danger" onClick={() => deleteTour(task.id)}>Delete</Button>
                <Button variant="warning" style={{ marginLeft: 10 }} onClick={() => editTour(task.id)}>Edit</Button>
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
       
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Cargo</h1>
        <Form >
          <Form.Group controlId="formGroupName">
            <Form.Label>โรค</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sickness" value={sickness}
              onChange={(e) => { setName(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => { setDate(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text"
              placeholder="Price" value={price}
              onChange={(e) => { setPlace(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupDetail">
            <Form.Label>Detail</Form.Label>
            <Form.Control type="text"
              placeholder="Detail" value={detail}
              onChange={(e) => { setLink(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          
        </Form>
        <Button variant="success" style={{ margin: 5, alignContent: 'center' }} onClick={addTour}>Add</Button>
        <ul style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>{rederTour()}</ul>
      </div>
    </>
  );
}

export default DataTour;