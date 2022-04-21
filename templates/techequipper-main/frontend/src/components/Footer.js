import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"

const Footer = () => {
    return ( 
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                        Copyright &copy; Tech Equipper
                    </Col>

                    <Col>Follow Us:
                    <Link to ="/cart"><i className="fab fa-twitter"></i></Link>
                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;