import React from 'react'
import { Card, Button } from 'react-bootstrap';
const Newsletter = () => {
  return (
    <>
    <Card className="card-newsletter text-center my-5" style={{
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/newsletter.svg'})`}}>
        <Card.Header>
          <h4 className='pt-2'>Get 10% off in your first purchase</h4>
        </Card.Header>
        <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <Card.Title>
              <h1>NEWSLETTER</h1>
            </Card.Title>
            <Card.Text>
                <h5>By signing up you will hear about our exclusive invites to events, be the first to hear about offers, sales and updates on new product launches.</h5>
            </Card.Text>
            <Button variant="primary">Sign in</Button>
        </Card.Body>
        <Card.Footer>We respect your privacy.</Card.Footer>
    </Card>
    </>
  )
}

export default Newsletter