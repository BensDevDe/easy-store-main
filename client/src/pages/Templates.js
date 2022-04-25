import { Card }from 'react-bootstrap'
import {  Row, Col, Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const Templates = () => {

  const [shopName, setShopName] = useState('')
  const [template, setTemplate] = useState('')

  // const createNewShop = () => {
  //   console.log(`Shop's name:${shopName}`);
  //   console.log(`Template chosen:${template}`);
  // }

  const submitHandler = async (e) => {
    e.preventDefault()

    const API_URL = 'http://localhost:5001/user'

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
      
   const response = await fetch(API_URL + '/template', {
    method: 'POST', 
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Fetch POST Request Example' }) }, )
  
   const data = await response.json()
      

      // const data = await axios.post(API_URL + '/template', {shopName, template}, config)
      console.log(data);

    } catch (error) {
      console.error(error)
    }


  }


  return (
    <div className='my-3' style={{width: '80vw'}}>
      <Row className='justify-content-center mx-5'>
        <Col>
        <h4 className='mt-2 mb-3'>Select your E-Commerce Template</h4>
        <h5>All templates have shared features such as:</h5>
        <ul>
          <li>Perfectly Responsive</li>
          <li>Cart Component</li>
          <li>Product reviews and ratings</li>
          <li>User profile with orders</li>
          <li>Admin product management</li>
          <li>Admin user management</li>
          <li>Admin Order details page</li>
          <li>Mark orders as delivered option</li>
        </ul>
        </Col>
        <Col>
        <Row className='mt-2 justify-content-center'>
          <Col className='my-2 text-center mx-auto'>

            <Form  onSubmit={submitHandler}>
              <Form.Group  className='my-2 mx-auto'controlId="CreateShop" >
              
                <Form.Label>Shop's name:</Form.Label>

                <Form.Control as='textarea' className='mx-auto'type="name" placeholder="Example: Anna's Bakery"  style={{width: '300px'}}
                onChange={(e) => setShopName(e.target.value)} />
                
                <Form.Select as='select' className='mt-3 mb-2 text-center mx-auto' aria-label="Default select example" style={{width: '300px'}}
                onChange={(e) => setTemplate(e.target.value)}>
                  <option>Choose your Template</option>
                  <option value="1">Organic Shop</option>
                  <option value="2">Techequipper</option>
                </Form.Select>

              </Form.Group>
              <Button className='my-2 text-center ms-2' type='submit' style={{backgroundColor: '#A47CA6', border: 'none', width: '200px'}}
                >Create Online Shop</Button>
                  {/* {shopName ?(
                    <Message variant='success'>
                      Congratulations! {shopName} is being created! Soon you'll receive a confirmation on your registered e-mail from us
                    </Message>): (
                      <Message variant='danger'>
                      Congratulations! {shopName} is being created! Soon you'll receive a confirmation on your registered e-mail from us
                    </Message>
                    )
                    } */}
              </Form>

            </Col>
          </Row>
        </Col>
      </Row>
      <h5 className='mt-4 text-center'>Check out all the uniques features each template offers and choose the one that best suits your company needs</h5>

        <Row className='mx-auto'>
          <Col  className='col-12 col-lg-6 align-center'> 
            <Card style={{backgroundColor:'#e4e4e4', borderRadius: '30px', width: '350px'}} className='my-4  mx-auto'>
                <Card.Title className='fw-bold mt-3 text-center'>Organic Shop Template</Card.Title>
                <Card.Text className='text-center' >It minimalistic nature inspired design.</Card.Text>
                <Card.Img className='px-4 my-1' src={process.env.PUBLIC_URL + '/images/micky_theme_1.png'} style={{height: '300px', objectFit:'cover', objectPosition: 'top center', borderRadius: '25px'}}/>
                <Card.Body className='text-center'>
                  <Card.Text className='px-2' >With this template you can add a Carousel to display your brand, create categories, add a Newsletter.</Card.Text>
                  <a className='btn link mx-2' style={{backgroundColor: '#A47CA6'}} rel='noopener noreferrer' target='_blank' href='https://organic-care-app.herokuapp.com/' >demo</a>
                </Card.Body>
            </Card>
          </Col>

          <Col  className='col-12 col-lg-6'>
            <Card style={{backgroundColor:'#e4e4e4', borderRadius: '30px', width: '350px'}} className='my-4 mx-auto'>
                <Card.Title className='fw-bold mt-3 text-center'>Techequipper Template</Card.Title>
                <Card.Text className='px-4 text-center' >A modern tech design.</Card.Text>
                <Card.Img className='px-4 my-1' src={process.env.PUBLIC_URL + '/images/antonis_shop.png'} style={{height: '300px', objectFit:'cover', objectPosition: 'top center', borderRadius: '25px'}}/>
                <Card.Body className='text-center'>

                  <Card.Text className='px-2' >Wrap your top products in the Hero Section, include a pagination feature to display all your products.</Card.Text>
                  <a className='btn link mx-2' style={{backgroundColor: '#A47CA6'}} rel='noopener noreferrer' target='_blank' href='https://techequipper.herokuapp.com/' >demo</a>
                </Card.Body>
            </Card>
          </Col>
        </Row>

      </div>
  )
}

export default Templates