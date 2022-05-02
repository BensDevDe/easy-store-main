import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {login} from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import {useLocation, useNavigate} from "react-router-dom";

const LoginScreen = () => {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("the location is: ");
    console.log(location);

    const redirect = location.search? location.search.split("=")[1] : "/";

    const userLogin = useSelector(state=>state.userLogin);

    const {loading, userInfo, error} = userLogin ; 

    console.log("the redirect is: ");
    console.log(redirect);


   useEffect(()=>{
      if(userInfo){
          navigate("/shipping");
      }
     
   }, [ navigate, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        // DISPATCH LOGIN
        console.log("i will try to login now");
        dispatch(login(email, password));
    }

    return ( 
        <>
        <FormContainer>
            <div className="loginScreen">
            <h1>Sign In</h1>
            {error && <Message variant="danger">Invalid Email and/or Password</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address: </Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <br/>
                <Form.Group controlId="password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <br/>
                <Button type="submit" variant="primary">
                    Sign In
                </Button>
            </Form>

            <Row className="py-3">
                <Col>
                New Customer?{" "} <Link to={`/register`}>Register</Link>
                </Col>
            </Row>
            </div>
        </FormContainer>
        </>
     );
}
 
export default LoginScreen;