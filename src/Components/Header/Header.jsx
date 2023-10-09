import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-primary shadow">
        <Container>
          <Navbar.Brand href="/" className='text-light fs-4'>
          <i className="fa-solid fa-utensils fa-beat-fade fa-lg me-3" ></i>
           My Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header