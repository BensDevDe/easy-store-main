import {useState} from "react";
import {Form, Button, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FormContainer from "../components/FormContainer";
import {useNavigate} from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import {savePaymentMethod} from "../actions/cartActions";

const PaymentScreen = () => {

    const cart = useSelector(state=>state.cart);
    const {shippingAddress} = cart;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (!shippingAddress){
        navigate("/shipping")
    }

    const [paymentMethod, setPaymentMethod]  = useState("Paypal")




    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeorder");
    }

    return ( 
        <FormContainer>
            <CheckoutSteps step1 step2/>
            <h1>Payment Method</h1>
                <Form onSubmit={submitHandler}>
                <br/>
                    <Form.Group>
                        <Form.Label as="legend">
                            Select Method
                        </Form.Label>
                   

                    <Col>
                        <Form.Check type="radio" label="Paypal or Credit Card" id="PayPal"
                        name="paymentMethod" value="PayPal" checked 
                        onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>

                    </Col>

                    </Form.Group>
                    <Button type="submit" variant="primary">Continue</Button>

                </Form>
            
        </FormContainer>
     );
}
 
export default PaymentScreen;  