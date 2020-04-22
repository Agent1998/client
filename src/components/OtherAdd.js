import React, { useState, useEffect } from 'react';
import { Button, Card, Form, } from 'react-bootstrap';
import {firestore} from '../index';
import './Datatour.css'
import TopbarAdd from './TopbarAdd';





const OtherAdd = () => {

    const [info, setInfo] = useState([])
    const [data,setData] = useState('')
    const [link,setLink] = useState('')
    const [head,setHead] = useState('')


  useEffect(() => {
    retrivData()
  }, [])

  const retrivData = () => {
    firestore.collection("info").onSnapshot((snapshot) => {
      let myInfo = snapshot.docs.map(d => {
        const { id, head,data,link } = d.data()
        return { id,head, data,link }
      })
      setInfo(myInfo)

    })
  }
  const deleteInfo = (id) => {
    firestore.collection("info").doc(id + '').delete()
  }
  
  const rederInfo = () => {
    if (info && info.length)
      return info.map((info, index) => {
        return (
          <div class="d-flex justify-content-center">
          <>
          
            <Card style={{ width: '25rem', marginTop: 10 }}>
              
              <Card.Body>
              <Card.Header className ="text">
                  หัวข้อข่าว : {info.head}
                  </Card.Header>
              <Card.Text className ="text">
                เนื้อหาโดยรวม : {info.data}
              </Card.Text>
              
              <Card.Text className ="text">
                รายละเอียดเพิ่มเติม : {info.link} 
              </Card.Text>
                <Button variant="danger" onClick={() => deleteInfo(info.id)}>Delete</Button>
                
              </Card.Body>
            </Card>


          </>
          </div>
        )
      })
    else
      return <li>No Info</li>
  }
  const addInfo = () => {
    let id = (info.length === 0) ? 1 : info[info.length - 1].id + 1
    firestore.collection("info").doc(id + '').set({ id,head, data,link })
  }
  return (
    <>
      <TopbarAdd/> 
      <div >
        <h1>ข่าวสารต่าง ๆ</h1>
        
        <Form className ="center">
          <Form.Group controlId="formGroupName">
            <Form.Label className ="text">หัวข้อข่าว</Form.Label>
            <Form.Control
              type="text"
              placeholder="หัวข้อข่าว"
              value={head}
              onChange={(e) => { setHead(e.target.value) }}
              style={{ width: 300 }}
            />
          </Form.Group>
          <Form.Group controlId="formGroupDate">
            <Form.Label className ="text">เนื้อข่าวโดยสรุป</Form.Label>
            <Form.Control type="text"
              placeholder="เนื้อข่าว"
              value={data}
              onChange={(e) => { setData(e.target.value) }}
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
        <Button variant="primary" style={{ margin: 5, alignContent: 'center' }} onClick={addInfo}>Add</Button>
        <ul className="discard">{rederInfo()}</ul>
        
      </div>
      </>  
  );
}

export default OtherAdd;