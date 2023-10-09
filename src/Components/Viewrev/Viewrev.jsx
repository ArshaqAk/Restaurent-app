import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Viewrev({review}) {
  const [open, setOpen] = useState(false);
  console.log(review);
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
            review?.map(item=>(
            <div>
              <h5>Name: {item.name}</h5>
              <h6>Date: {item.date}</h6>
              <h6>Rating: {item.rating}*</h6>
              </div>

              

            ))
        }
        </div>
      </Collapse>
    </div>
  )
}

export default Viewrev