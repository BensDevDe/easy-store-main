import React from 'react'
import { Link } from 'react-router-dom'
import { MdMenu, MdManageAccounts, MdAnalytics, MdMonitor, MdEdit } from "react-icons/md";

const Sidebar = () => {
  return (
    <section className='ps-2 ps-md-4 my-3 py-3' 
    style={{backgroundColor: '#A47CA6', width: '15vw', height: '100vh', borderRadius: '10px' }}>
            <h4 className='py-3'><MdMenu className='me-2'/>Menu</h4>
            <Link  to='/dashboard/profile' className='text-decoration-none'><p className='text-light fs-5'><MdManageAccounts className='me-2'/>Profile</p></Link>
            {/* <Link to='/dashboard/analytics'  className='text-decoration-none'><p className='text-light fs-5'><MdAnalytics className='me-2'/>Analytics</p></Link> */}
            <Link to='/dashboard/templates'  className='text-decoration-none'><p className='text-light fs-5'><MdMonitor className='me-2'/>Templates</p></Link>
            <h5 className='py-3'><MdEdit className='me-2'/>Edit Template</h5>
            <Link to='/dashboard/navbarEdit'  className='text-decoration-none'><p className='text-light fs-5'>Navbar</p></Link>
            <Link to='/dashboard/footerEdit'  className='text-decoration-none'><p className='text-light fs-5'>Footer</p></Link>
    </section>
  )
}

export default Sidebar
