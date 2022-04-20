import React from 'react'
import Sidebar from '../components/Sidebar';
import { Col, Row, Container } from 'react-bootstrap'
import MainDashboardContent from '../components/MainDashboardContent'

const Dashboard = () => {
  return (
    <div className='my-3' style={{backgroundColor: 'rgb(242, 242, 242)'}}>
      <Container fluid>
        <Row>
            <Col className='dashboard-menu col-md-3 col-lg-2'>
                <Sidebar />
            </Col>
            <Col className='dashboard-main col-md-9 col-lg-10 pt-2'>
                <MainDashboardContent/>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Dashboard