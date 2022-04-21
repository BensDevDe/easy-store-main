import React from 'react'
import { Link } from 'react-router-dom'
import { MdMenu, MdManageAccounts, MdAnalytics, MdMonitor, MdEdit } from "react-icons/md";

const Sidebar = () => {
  return (
    <section className='ps-2 ps-md-4 my-3 py-3' 
    style={{backgroundColor: '#A47CA6', width: '15vw', height: '90vh', borderRadius: '10px' }}>
            <h4 className='py-3'><MdMenu className='me-2'/>Menu</h4>
            <Link  to='/dashboard/profile' className='text-decoration-none'><p className='text-light fs-5'><MdManageAccounts className='me-2'/>Profile</p></Link>
            <Link to='/dashboard/analytics'  className='text-decoration-none'><p className='text-light fs-5'><MdAnalytics className='me-2'/>Analytics</p></Link>
            <Link to='/dashboard/templates'  className='text-decoration-none'><p className='text-light fs-5'><MdMonitor className='me-2'/>Templates</p></Link>
            <h5 className='py-3'><MdEdit className='me-2'/>Edit Template</h5>
            <Link to='/dashboard/navbarEdit'  className='text-decoration-none'><p className='text-light fs-5'>Navbar</p></Link>
            <Link to='/dashboard/footerEdit'  className='text-decoration-none'><p className='text-light fs-5'>Footer</p></Link>
    </section>
  )
}

export default Sidebar
// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div style={{ display: 'flex', height: '85vh', overflow: 'scroll initial', marginLeft: '0' }}>
//       <CDBSidebar textColor="#fff" backgroundColor="#A883AA">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//             Menu
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/dashboard/profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/dashboard/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink to="/dashboard/templates" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Templates</CDBSidebarMenuItem>
//             </NavLink>
//             <h5 className='ps-4 my-5'>Edit Template</h5>
//             <NavLink to="/dashboard/templates" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Navbar</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink to="/dashboard/templates" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Footer</CDBSidebarMenuItem>
//             </NavLink>


//           </CDBSidebarMenu>
//         </CDBSidebarContent>
//       </CDBSidebar>
//     </div>
//   );
// };

// export default Sidebar;