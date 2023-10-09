import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Viewop from '../Viewop/Viewop';
import Viewrev from '../Viewrev/Viewrev';




function Viewrest() {
  const [data,setData]=useState({})
  // const pathParameter=useParams()
  // console.log(pathParameter);//id:1  -object
  // console.log(pathParameter.id);

  //destructure parameter
  const {id}=useParams()

  const fetchData=()=>{
    axios.get(`http://localhost:3001/restaurants/${id}`)
    .then(response=>{
      setData(response.data);
    })
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>
      <Row>
        <Col>
        <img src={`${data.photograph}`} alt="" style={{width:'400px', margin:'20px', borderRadius:'15px'}} />
        </Col>

        <Col>
        <ListGroup style={{marginTop:'90px', marginRight:'70px', width:'400px'}}>

      <ListGroup.Item>Name:  {data.name}</ListGroup.Item>
      <ListGroup.Item>Address:  {data.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type:  {data.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood:  {data.neighborhood}</ListGroup.Item>
      <ListGroup.Item> <Viewop time={data.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><Viewrev review={data.reviews}/></ListGroup.Item>


      
    </ListGroup>
        </Col>
        
      </Row>
       
    </div>
  )
}

export default Viewrest