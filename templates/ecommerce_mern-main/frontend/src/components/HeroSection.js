import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <Carousel>
        <Carousel.Item>
          <img
            className="image1 d-block w-100"
            src={process.env.PUBLIC_URL + "/images/hero-image1.svg"}
            alt="First slide"
          />
           <Carousel.Caption>
            <h3>ORGANIC CARE</h3>
            <p>Protect your skin this season with products from our list of the best vegan body lotions for dry winter skin.</p>
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/hero-image2.jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Serums</h3>
            <p>Looking for a serum to fix a specific problem? Specificity is another one of those wonderful benefits that serums can tackle, which many creams have a difficult time with. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/hero-image3.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Face wash</h3>
            <p>A gentle liquid soap that gives deep pore cleansing. It is an easiest way to get rid of the extra oil, makeup and dust particles from the skin.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HeroSection