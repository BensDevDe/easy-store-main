import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../actions/userActions";
import logo from "../../src/imagesToImport/Modern Line Cube Technology Logo/1.png"
// call an action -> useDispatch
// if you want to bring something in -> useSelector

const Header = () => {

    const dispatch = useDispatch();

    const userLogin = useSelector(state=>state.userLogin);
    const {userInfo} = userLogin;


    const logoutHandler = () => {
        dispatch(logout());
    }

    return ( 
        <header>
            <Navbar className="py-4" expand="lg" collapseOnSelect fixed="top">
                <Container>
                    <LinkContainer to = "/">
                        <Navbar.Brand ><img className="myLogo" src={logo} alt="this is a nice logo"></img></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <LinkContainer to = "/cart">
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ):
                            
                            <LinkContainer to ="/login">
                                <Nav.Link><i className="fas fa-user"></i>  Sign In</Nav.Link>
                            </LinkContainer>
                            }

                            {userInfo && userInfo.isAdmin && (
                                  <NavDropdown title="Admin" id="adminmenu">
                                  <LinkContainer to={`/admin/userlist`}>
                                      <NavDropdown.Item>Users</NavDropdown.Item>
                                  </LinkContainer>

                                  <LinkContainer to={`/admin/productlist`}>
                                      <NavDropdown.Item>Products</NavDropdown.Item>
                                  </LinkContainer>

                                  <LinkContainer to={`/admin/orderlist`}>
                                      <NavDropdown.Item>Orders</NavDropdown.Item>
                                  </LinkContainer>
                              </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
     );
}
 
export default Header;