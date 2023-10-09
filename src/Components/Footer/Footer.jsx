import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

function Footer() {
  return (
    <div>
        <Navbar className="bg-dark shadow">
        <Container>
          <Navbar.Brand href="#home" className='text-light fs-4'>
            <h5 className='foottext'>All Rights are Reserved under My Cafe@gmail.com</h5>
           
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Footer