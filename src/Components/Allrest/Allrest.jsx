import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Restcard from '../Restcard/Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Allrest() {
  const[alldata,setAlldata]=useState([])
  const fetchData=()=>{
    axios.get('http://localhost:3001/restaurants')
    .then(response=>{
      setAlldata(response.data)
    })
  }

  useEffect(()=>{
    fetchData() //functon call
  },[])
  return (
    <div>
      <div className="container-fluid">
     <Row>
     {
        alldata.map(item=>(
          
         <Col sm={12} md={6} lg={4} xl={3}>
         <Restcard restitem={item}/>
         </Col> 
        ))
      }
     </Row>
     </div>
    </div>
  )
}

export default Allrest