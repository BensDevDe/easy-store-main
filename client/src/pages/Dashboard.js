import React from 'react'
import Sidebar from '../components/Sidebar';
import { Container } from 'react-bootstrap'
import MainDashboardContent from '../components/MainDashboardContent'

const Dashboard = () => {
  return (
    <div className='my-3' style={{backgroundColor: 'rgb(242, 242, 242)'}}>
      <Container fluid className='d-flex'>
          <Sidebar />
          <MainDashboardContent/>        
        {/* <Row>
            <Col className='dashboard-menu col-md-4 col-lg-3'>
                <Sidebar />
            </Col>
            <Col className='dashboard-main col-md-8 col-lg-9 pt-2'>
                <MainDashboardContent/>
            </Col>
        </Row> */}
        </Container>
    </div>
  )
}

export default Dashboard