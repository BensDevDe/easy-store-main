import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import {Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem} from "react-bootstrap";
import {addToCart, removeFromCart} from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
 
const CartScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {productId} = useParams();
    const dispatch = useDispatch();



    console.log("the id is : " , productId)

    const qty = location.search ? Number(location.search.slice(location.search.length-1)) : 1;
    // the result is for example ?qty=5 or whatever the user asks and after the changes i keep only the number
    console.log("The quantity is right now the following: ");
    console.log(qty);


    const cart = useSelector(state=> state.cart);
    const {cartItems} = cart;
    console.log("The cart is right now the following: ");
    console.log(cartItems);


    useEffect(()=>{
        console.log('use effect will run, time to dispatch the action')
        if(productId) dispatch(addToCart(productId, qty))
        
    },[dispatch, productId, qty ])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const checkoutHandler =  () => {
        // they will go to login, and if they are logged in they will redirect to shipping
        navigate(`/login?redirect=shipping`);
    }
   

    return ( 
        <Row>
            <Col md={8}>
                <h1>Shopping Cart:</h1>
                {cartItems.length === 0 ? 
                    <Message>Your cart is empty <Link to="/">Go Back</Link></Message>:
                    (
                        <ListGroup variant="flush">
                            {
                                cartItems.map(item=>(
                                    // item.product is the id
                                    <ListGroupItem key={item.product}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src={item.image} alt={item.name} fluid rounded></Image>
                                            </Col>
                                            <Col md={3}>
                                                <Link to ={`/product/${item.product}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={2}>
                                                {item.price} €
                                            </Col>
                                            <Col md={2}>
                                            <Form.Control as="select" value={item.qty} onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                {
                                                [...Array(item.countInStock).keys()].map(x=>(
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                ))
                                                }
                                             </Form.Control>
                                            </Col>
                                            <Col md={2}>
                                                <Button type="button" variant="light" onClick={()=>removeFromCartHandler(item.product)}>
                                                    <i className = "fas fa-trash"></i>
                                                </Button>
                                            </Col>
                                            
                                        </Row>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    )
                }
                
            </Col>
            { cartItems.length > 0 && 

            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h2>Subtotal ({cartItems.map(x=>x.qty).reduce((a,b)=>a+b)}) items</h2>
                            {cartItems.reduce((acc,item)=>acc+item.qty*item.price,0).toFixed(2)}€  
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button type="button" className="btn-block" disabled={cartItems.length===0} onClick={checkoutHandler}>Proceed To Checkout</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>

            }

            
          
        </Row>
     );
}
 
export default CartScreen;