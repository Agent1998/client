import React, { useState, useEffect } from 'react';
import {  Card } from 'react-bootstrap';
import {firestore} from '../index';
import Topbar2 from './Topbar2';
import './Datatour.css'



const Tournament = () => {

  const [tour, setTour] = useState([])
  const [date] = useState('')
  const [name] = useState('')
  const [place] = useState('')
  const [link] = useState('')


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
            
          <Card style={{ width: '25rem'}}>
            
            <Card.Body >
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
             
            </Card.Body>
          </Card>


        </>
        )
      })
    else
      return <li>No Tour</li>
  }
 
  return (
    <>
       <Topbar2/>
      <div >
        <h1>รายการแข่งขัน</h1>
        
        
        <ul className="discard">{rederTour()}</ul>
      </div>
    </>
  );
}

export default Tournament;