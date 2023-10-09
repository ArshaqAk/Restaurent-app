import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Restcard.css';
import { Link } from 'react-router-dom';


function Restcard({restitem}) {
    console.log(restitem);
  return (
    <div>
      
    <Link to={`/view/${restitem.id}`} style={{textDecoration:'none'}}>
    <Card >
      <Card.Img variant="top" src={restitem.photograph}  className='img'/>
      <Card.Body>
        <Card.Title>{restitem.name}</Card.Title>
        <Card.Text>
         <p> Address:  {restitem.address}</p>
         <p> Neighborhood: {restitem.neighborhood}</p>
         <p> Cuisine type:  {restitem.cuisine_type}</p>
        </Card.Text>
      </Card.Body>
    </Card>

    </Link>
       

    </div>
  )
}

export default Restcard