import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingPage = () => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const navigate = useNavigate();

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler =(e) =>{
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/payment')
    }


  return (
    <Container className='px-5 px-md-0'>
    <FormContainer >
      <CheckoutSteps step1 step2 />
      <Form onSubmit={submitHandler}>
        <h1>Shipping</h1>
          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter address'
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
              className='mb-3'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter city'
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
              className='mb-3'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='postalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter postal code'
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)
              }
              className='mb-3'
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter country'
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
              className='mb-3'
            ></Form.Control>
          </Form.Group>

          <Button className='my-3' type='submit' variant='primary'  style={{borderRadius: '10px'}}>
            Continue
          </Button>
        </Form>
    </FormContainer>
    </Container>
  )
}

export default ShippingPage