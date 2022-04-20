import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '85vh', overflow: 'scroll initial', marginLeft: '0' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#A883AA">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dashboard/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/dashboard/templates" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Templates</CDBSidebarMenuItem>
            </NavLink>
            <h5 className='ps-4 my-5'>Edit Template</h5>
            <NavLink to="/dashboard/templates" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Navbar</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/dashboard/templates" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Footer</CDBSidebarMenuItem>
            </NavLink>


          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;