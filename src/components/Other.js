import React, { useState, useEffect } from 'react';
import {  Card } from 'react-bootstrap';
import {firestore} from '../index';
import Topbar2 from './Topbar2';
import './Datatour.css'



const Other = () => {

  const [info, setInfo] = useState([])
  const [data] = useState('')
  const [link] = useState('')
  const [head] = useState('')


  useEffect(() => {
    retrivData()
  }, [])

  const retrivData = () => {
    firestore.collection("info").onSnapshot((snapshot) => {
      let myInfo = snapshot.docs.map(d => {
        const { id,head, data,link } = d.data()
        return { id,head, data,link }
      })
      setInfo(myInfo)

    })
  }
  const rederInfo = () => {
    if (info && info.length)
      return info.map((info, index) => {
        return (
          <>
            
          <Card style={{ width: '25rem'}}>
            
            <Card.Body >
              <Card.Header className ="text">หัวข้อข่าว : {info.head}</Card.Header>
              <Card.Text className ="text">
                เนื้อหาโดยรวม : {info.data}
              </Card.Text>
              
              <Card.Text className ="text">
                รายละเอียดเพิ่มเติม : {info.link} 
              </Card.Text>
             
            </Card.Body>
          </Card>


        </>
        )
      })
    else
      return <li>No info</li>
  }
 
  return (
    <>
       <Topbar2/>
      <div >
        <h1>ข่าวสารต่าง ๆ</h1>
        
        
        <ul className="discard">{rederInfo()}</ul>
      </div>
    </>
  );
}

export default Other;