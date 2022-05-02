import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../components/Product";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import Carousels from "../components/Carousel";
import mother1 from "../imagesToImport/motherboards/mother-1.png";
import mother2 from "../imagesToImport/motherboards/mother-2.png";
import mother3 from "../imagesToImport/motherboards/mother-3.png";
import mother4 from "../imagesToImport/motherboards/8.png";
import {v4 as uuidv4} from "uuid";


const HomeScreen = () => {

    const params = useParams()
    const dispatch = useDispatch()
  
    const keyword = params.keyword

    // name comes from the reducer
    const productList = useSelector(state=> state.productList);
    const {loading, error, products} = productList;
    
    console.log(productList);

    useEffect(() => {
        dispatch(listProducts())
      }, [dispatch, keyword])

    return ( 
        <>
            <Meta/>
            <Carousels/>
            <h1>Latest Products:</h1>
            {loading? <Loader/>: error? <Message variant="danger">{error}</Message>:
            <> 
            <Row className="homescreenProducts">
                { products  && 
                
                    products.map(product=>(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))
                
                }
            </Row>


            <Row xs={1} md={2}  className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={uuidv4()}>
                    <Card>
                        <Card.Img variant="top" src={idx===0?mother1:idx===1?mother2:idx===3?mother3:mother4} />
                        <Card.Body>
                        <Card.Title>{
                            idx===0 ? "Design: Dragon-Scale ATX" : 
                            idx===1? "Design and Port Placement: Asrock Z690 Taichi":
                            idx===2? "The Design: Art From the Minimalist School":
                            "The Design: Dancing Lights, Pumped-Up Power"
                        }
                        </Card.Title>
                        <Card.Text>
                            {
                                idx===0? "Aesthetically, the MSI MPG Z690 Carbon Wi-Fi is nothing special. The motherboard is attractive, with a dark color scheme and a dragon outline etched into the rear I/O cover, but this has been MSI's go-to design for years. At a glance, you'd be hard pressed to tell the MPG Z690 Carbon apart from many previous MSI platforms.":
                                idx===1? "Aesthetically, the Z690 Taichi is an attractive board with a black PCB, black heatsinks, and metallic copper highlights. Decorative LEDs are set over the chipset and the rear I/O shroud, as well as down the right side of the board, adding extra flair whenever the board is powered up. Much of the rear of the PCB is braced in metal plating for a sturdy, stiff feel.":
                                idx===2? "The ProArt B550-Creator features a black PCB with black heatsinks on the VRMs, the chipset, and the M.2 slots. The rear I/O shroud is also black, but it's made of an opaque plastic that leaves some components underneath barely visible." :
                                "Right off the mark, you’ll notice the Asus ROG Maximus Z690 Hero has a large, shiny Republic of Gamers (ROG) logo and a large section over its rear I/O shroud that's designed to light up. The shroud section Employs what Asus calls its \"Polymo Lighting\" scheme."
                            }
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>



            </>
            }
        </>
     );
}
 
export default HomeScreen;