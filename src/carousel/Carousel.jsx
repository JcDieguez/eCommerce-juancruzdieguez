import React from 'react'
import iphone12pro from '../assets/iphone12pro.jpg'
import iphone13max from '../assets/iphone13max.jpg'
import iphone14pro from '../assets/iphone14pro.jpg'
import './style.css'
import Carousel from 'react-bootstrap/Carousel';

function CarouselIndex() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iphone14pro}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>IPHONE 14 PRO</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iphone13max}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>IPHONE 13 PRO</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iphone12pro}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>IPHONE 12 PRO</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselIndex;