import {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FormContainer from "../components/FormContainer";
import {useNavigate} from "react-router-dom";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart);
    const {shippingAddress} = cart;
    const navigate = useNavigate();

    console.log("the cart is ");
    console.log(cart);

    // if it's in the local storage it will pull it out and put it in the fields of the form of the /shipping
    const [address, setAddress] = useState(shippingAddress.address);
    const [city,setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country,setCountry] = useState(shippingAddress.country);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,postalCode,country}));
        navigate("/payment");
    }

    return ( 
        <FormContainer>
            <CheckoutSteps step1 step2/>
            <h1>Shipping</h1>
                <Form onSubmit={submitHandler}>
                <br/>

                    <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" value={address} required onChange={(e)=>setAddress(e.target.value)}></Form.Control>
                    </Form.Group>
                    <br/>

                    <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" value={city} required onChange={(e)=>setCity(e.target.value)}></Form.Control>
                    </Form.Group>
                    <br/>

                    <Form.Group controlId="postalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter postal code" value={postalCode} required onChange={(e)=>setPostalCode(e.target.value)}></Form.Control>
                    </Form.Group>
                    <br/>

                    <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter country" value={country} required onChange={(e)=>setCountry(e.target.value)}></Form.Control>
                    </Form.Group>
                    <br/>
                    <Button type="submit" variant="primary">Continue</Button>

                </Form>
            
        </FormContainer>
     );
}
 
export default ShippingScreen;  