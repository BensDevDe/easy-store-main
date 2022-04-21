import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Categories = () => {
  return (
    <section className='categories-component my-5 pb-5 mx-0 '>
        <h1 className='pt-5 pb-2 px-5 px-md-0 text-center'>Categories</h1>
        <Row className='px-3'>
            <Col className='px-2 py-3 py-md-1 text-center' md={6} lg={3}>
                <Link to='/categories/Skin Care'>
                    <Image className='categories-image' src={process.env.PUBLIC_URL + "/images/category1.svg"} alt='' />
                    <h4>Skin Care</h4>
                </Link>
            </Col>  
            <Col className='px-2 py-3 py-md-1  text-center' md={6} lg={3}>
                <Link to='/categories/Make Up'>
                    <Image className='categories-image' src={process.env.PUBLIC_URL + "/images/category2.svg"} alt='' />
                    <h4>Make Up</h4>
                </Link>
            </Col> 
            <Col className='px-2 py-3 py-md-1 text-center' md={6} lg={3}>
                <Link to='/categories/Body Cream'>
                    <Image className='categories-image' src={process.env.PUBLIC_URL + "/images/category3.svg"} alt='' />
                    <h4>Body Cream</h4>
                </Link>
            </Col> 
            <Col className='px-2 py-3 py-md-1  text-center' md={6} lg={3}>
                <Link to='/categories/Accessories'>
                    <Image className='categories-image' src={process.env.PUBLIC_URL + "/images/category4.svg"} alt='' />
                    <h4>Accessories</h4>
                </Link>
            </Col>  
        </Row>
    </section>
  )
}

export default Categories