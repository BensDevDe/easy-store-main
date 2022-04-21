import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  return (
  <footer>
      <Container fluid>
        <Row className='mr-3 ml-3 pt-4 pb-1 text-center'>
          <Col md={4}>
            <h4>Categories</h4>
            <ul>
              <Link to='/categories/Skin Care'><li>Skin Care</li></Link>
              <Link to='/categories/Body Lotion'><li>Body Cream</li></Link>
              <Link to='/categories/Make Up'><li>Make Up</li></Link>
              <Link to='/categories/Accessories'><li>Accessories</li></Link>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Information</h4>
            <ul>
              <Link to='/'><li>About Us</li></Link>
              <Link to='/'><li>Contact Us</li></Link>
              <Link to='/'><li>Privacy Policy</li></Link>
            </ul>
          </Col>
          <Col md={4}>
              <h4>Follow Us</h4>
              <ul >
                <Link to='/'><li>Facebook</li></Link>
                <Link to='/'><li>Twitter</li></Link>
                <Link to='/'><li>Instagram</li></Link>
              </ul>
            </Col>
        </Row>
        <Row className='me-3 ms-3 pt-1 pb-2 text-center'>
          <Col>
            <FaCcPaypal size={50} className='pe-2' />
            <FaCcVisa size={50} className='pe-2' />
            <FaCcMastercard size={50} className='pe-2' />
          </Col>
        </Row>
        <Row className='copyright'>
            <Col className='text-center py-3'>
                Copyright &copy; OrganicCare
            </Col>
            <Col className='text-center py-3'>
                <Link to='/'>Powered by EasyStore<Image src={process.env.PUBLIC_URL + "/images/easyStoreLogo.png"}/></Link>
            </Col>
        </Row>
      </Container>
    </footer>
    )
};

export default Footer;
