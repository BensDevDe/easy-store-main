import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Sale = () => {
  return (
    <>
    <Card className='card-sale my-5' style={{
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/sale.svg'})`}} >
        <Card.Body className='px-5'>
            <Card.Title>
              <h1> DON'T MISS OUR SEASON SALE !!!</h1>
            </Card.Title>
            <Card.Title>
              <h2> SAVE 50% ON ALL ITEMS</h2>
            </Card.Title>
            <Card.Text>
              <h5>With supporting text below as a natural lead-in to additional content.</h5>
            </Card.Text>
            <Button className='btn-shop' variant="primary">SHOP NOW</Button>
        </Card.Body>
        </Card>
    </>
  )
}

export default Sale