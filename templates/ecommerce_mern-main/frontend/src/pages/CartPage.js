import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Container } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'


const CartPage = () => {
  const params = useParams()
  const location = useLocation()
  const productId = params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const navigate = useNavigate();

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  },[dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping')
  }


  return (
    <Container>
      <h1 className='py-3 px-5 px-md-0 '>Shopping Cart</h1>
    <Row>
      <Col md={8}>
        {cartItems.length === 0 ? (
          <Message variant='light'>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>€{item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <ListGroup variant='flush'>
          <ListGroup.Item >
            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
            €
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
                style={{borderRadius: '10px'}}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={2}>
        
      </Col>
    </Row>
    </Container>
  )
}

export default CartPage