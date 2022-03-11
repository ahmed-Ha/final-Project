import React from 'react'
import {Card} from 'react-bootstrap'
import img1 from '../components/img/img1.jpg'



function ContactPage() {
  return (
    <div>
        <Card style={{ width: '50rem' }}>
  <Card.Img variant="top" src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    
  </Card.Body>
</Card>
    </div>
  )
}

export default ContactPage