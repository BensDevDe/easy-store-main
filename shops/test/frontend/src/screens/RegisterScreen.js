import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {register} from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import {useLocation, useNavigate} from "react-router-dom";

const RegisterScreen = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message,setMessage] = useState(null);


    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("the location is: ");
    console.log(location);

    const redirect = location.search? location.search.split("=")[1] : "/";

    const userRegister = useSelector(state=>state.userRegister);

    const {loading, userInfo, error} = userRegister ; 

    console.log("the redirect in the register screen has the value of : ");
    console.log(redirect);


   useEffect(()=>{
    console.log('did i just enter the useEffect of the Register Screen?')
    console.log("-!-");
    console.log(userInfo);
    console.log("!-!");
    if(userInfo){
        navigate("/");
    }
     
   }, [ navigate, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        // DISPATCH REGISTER
        if (password !== confirmPassword){
            setMessage("Passwords do not match!");
        }else{
            console.log("i will try to register now");
            dispatch(register(name, email, password));
        }
       
    }

    return ( 
        <>
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                </Form.Group>
                <br/>
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
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <br/>
                <Button type="submit" variant="primary">
                    Register
                </Button>
            </Form>

            <Row className="py-3">
                <Col>
                Have an Account?{"     "} <Link to={`/login`}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
        </>
     );
}
 
export default RegisterScreen;