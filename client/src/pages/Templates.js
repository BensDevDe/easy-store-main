import { Card }from 'react-bootstrap'
import {  Row, Col, Form, Button} from 'react-bootstrap'

const Templates = () => {
  return (
    <div className='my-3' style={{width: '80vw'}}>
      <Row className='justify-content-center'>
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
            <Form.Group  className='my-2 mx-auto'controlId="exampleForm.ControlInput1">
              <Form.Label>Shop's name:</Form.Label>
              <Form.Control className='mx-auto'type="name" placeholder="Example: Anna's Bakery"  style={{width: '300px'}} />
            </Form.Group>

              <Form.Select className='mt-3 mb-2 text-center mx-auto' aria-label="Default select example" style={{width: '300px'}}>
              <option>Choose your Template</option>
                <option value="1">Organic Shop</option>
                <option value="2">Techequipper</option>
              </Form.Select>
              <Button className='my-2 text-center ms-2' style={{backgroundColor: '#A47CA6', border: 'none', width: '200px'}}  >Create Online Shop</Button>
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