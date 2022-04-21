import { Navbar, Nav, NavDropdown,Container, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () =>{
        dispatch(logout());
    }

return (
    <header>
        <Navbar className='text-center' expand="lg" collapseOnSelect>

            <Container fluid>
                
                {/* LOGO IMAGE CONTAINER */}
                <LinkContainer className='ms-3'  to='/'  style={{ cursor: "pointer" }}>
                    <Image src={process.env.PUBLIC_URL + "/images/logo2.png"} className='brand-name' />
                </LinkContainer>
                
                {/* NAVBAR */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* NavItem */}
                            <LinkContainer to='/'>
                                <Nav.Link className="text-center ps-lg-4">HOME</Nav.Link>
                            </LinkContainer>
                            {/* NavDropdown */}
                            <NavDropdown className="text-center ps-lg-4" title="CATEGORIES" id="basic-nav-dropdown">
                                <LinkContainer to='/categories/Skin Care'>
                                    {/* NavDropdown Item */}
                                    <NavDropdown.Item className="ps-4 text-center">
                                        <div className="pull-left dropdown-item-nav">
                                            <img className="thumbnail-image me-4" 
                                            src={process.env.PUBLIC_URL + "/images/category_skincare.png"}  
                                            alt="user pic"/>
                                            Skin Care
                                        </div>
                                    </NavDropdown.Item>
                                </LinkContainer>
                            <LinkContainer to='/categories/Body Lotion'>
                                {/* NavDropdown Item */}
                                <NavDropdown.Item className="ps-4 text-center">
                                    <div className="pull-left dropdown-item-nav">
                                        <img id="thumbnail-image " className="thumbnail-image me-4" 
                                        src={process.env.PUBLIC_URL + "/images/category_bodycream.png"}  
                                        alt="user pic"/>
                                        Body Cream
                                    </div>
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/categories/Make Up'>
                                {/* NavDropdown Item */}
                                <NavDropdown.Item className="ps-4 text-center">
                                    <div className="pull-left dropdown-item-nav">
                                        <img className="thumbnail-image me-4" 
                                        src={process.env.PUBLIC_URL + "/images/category_makeup.png"}  
                                        alt="user pic"/>
                                        Make Up
                                    </div>
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/categories/Accessories'>
                            {/* NavDropdown Item */}
                            <NavDropdown.Item className="ps-4 text-center">
                                    <div className="pull-left dropdown-item-nav">
                                        <img className="thumbnail-image me-4" 
                                    src={process.env.PUBLIC_URL + "/images/category_accessories.png"}  
                                    alt="user pic"/>
                                        Accessories
                                    </div>
                            </NavDropdown.Item>
                            </LinkContainer>
                            </NavDropdown>
                            {/* End NavDropDown */}
                            
                            {/* NavItem */}
                            <LinkContainer to='/cart'>
                                <Nav.Link className="text-center ps-lg-4"><i className='fas fa-shopping-cart pe-2'></i>CART</Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown className="text-center ps-lg-4"  title={userInfo.name.toUpperCase()} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item className="text-center">Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item  className="text-center" onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                                ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link className="ps-lg-4 pe-lg-5"><i className='fas fa-user pe-2'></i>SIGN IN</Nav.Link>
                                </LinkContainer>
                            )}

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown className="text-center ps-lg-4 pe-lg-4" title='ADMIN' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item className="text-center">Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item className="text-center">Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item className="text-center">Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )};
        
export default Header;