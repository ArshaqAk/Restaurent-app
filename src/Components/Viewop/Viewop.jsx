import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
function Viewop({time}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <div>
        <Button variant="primary" onClick={handleShow}>
       Open Time
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Restaurant Timing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item style={{color:'green'}}>Monday: {time?.Monday}</ListGroup.Item>
      <ListGroup.Item style={{color:'green'}}>Tuesday: {time?.Tuesday}</ListGroup.Item>
      <ListGroup.Item style={{color:'green'}}>Wednesday: {time?.Wednesday}</ListGroup.Item>
      <ListGroup.Item  style={{color:'green'}}>Thursday: {time?.Thursday}</ListGroup.Item>
      <ListGroup.Item  style={{color:'green'}}>Friday: {time?.Friday}</ListGroup.Item>
      <ListGroup.Item  style={{color:'red'}}>Saturday: {time?.Saturday}</ListGroup.Item>
      <ListGroup.Item  style={{color:'red'}}>Sunday: {time?.Sunday}</ListGroup.Item>

    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Viewop