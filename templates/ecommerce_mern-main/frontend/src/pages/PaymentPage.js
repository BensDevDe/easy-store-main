import React, { useState } from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentPage = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const navigate = useNavigate();

  if (!shippingAddress.address) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <Container className='px-5 px-md-0'>
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1 className='py-2'>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend' className='pb-2'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='my-2'
            ></Form.Check>
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>  */}
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3' style={{borderRadius: '10px'}}>
          Continue
        </Button>
      </Form>
    </FormContainer>
    </Container>
  )
}

export default PaymentPage