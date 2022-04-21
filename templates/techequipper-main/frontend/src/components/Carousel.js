import { Carousel } from "react-bootstrap";
import img1 from "../imagesToImport/motherboards/1.png";
import img2 from "../imagesToImport/motherboards/2.png";
import img3 from "../imagesToImport/motherboards/3.png";

const Carousels = () => {
    return ( 
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <br/><br/><br/><br/><br/><br/>
    <Carousel.Caption>
      <h3>UNIQUE MOTHERBOARDS</h3>
      <p style={{color:"black"}}>Audio Chip: Realtek ALC887
USB 2.0 Headers:
USB 3.0 Headers:
SATA3: 4</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <br/><br/><br/><br/><br/><br/>
    <Carousel.Caption>
      <h3>UNIQUE DESIGN</h3>
      <p style={{color:"black"}}>Audio Chip: Realtek ALC892
USB 2.0 Headers:
USB 3.0 Headers:
SATA3: 4</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <br/><br/><br/><br/><br/><br/>
    <Carousel.Caption>
      <h3>AFFORDABLE PRICES</h3>
      <p style={{color:"black"}}>Audio Chip: Realtek ALC887
USB 2.0 Headers:
USB 3.0 Headers:
SATA3: 4</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     );
}
 
export default Carousels;