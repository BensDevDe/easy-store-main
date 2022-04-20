import {Link} from 'react-router-dom';
import { Col, Row,Image}from 'react-bootstrap'


const Templates = () => {
  return (
    <>
      <h4 className='my-5'>Select your E-Commerce Template:</h4>

        <Row>
          <Col>
            <Link  to='dashboard/templates'>
              <h3 className='mt-5'>Organic Shop Template</h3>
              <Image src={process.env.PUBLIC_URL + '/images/micky_theme_1.png'} alt="img" style={{width: '300px', height: '300px', objectFit: 'cover', objectPosition:'top center', marginLeft:' 1rem'}}/>
            </Link> 
          </Col>
          <Col>
            <Link  to='dashboard/templates'>
              <h3 className='mt-5'>Organic Shop Template</h3>
              <Image src={process.env.PUBLIC_URL + '/images/long_img_2.png'} alt="img" style={{width: '300px', height: '300px', objectFit: 'cover', objectPosition:'top center', marginLeft:' 1rem'}}/>
            </Link> 
          </Col>
        </Row>

    </>
  )
}

export default Templates