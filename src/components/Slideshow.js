import React from "react"
import { Link } from 'gatsby'
import Carousel from "react-bootstrap/Carousel"
// import SlideImg1 from "../images/slideshow/banner-1.jpg"
import SlideImg2 from "../images/slideshow/banner-2.jpg"
// import SlideImg3 from "../images/slideshow/banner-3.jpg"
import Underline from "../images/slideshow/underline.svg"

const Slideshow = () => {
  return (
    <Carousel id="hero-banner" className="main-slide" controls={false}>
      <Carousel.Item>
        <img src={SlideImg2} alt="slider" />
        <Carousel.Caption>
          <div className="slider-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-left">
                  <h1 className="animated1">We design thoughtful digital experiences & beautiful brand aesthetics.</h1>
                  <img src={Underline} className="underline animated1" alt="underline" />
                  <p className="animated2">
                    Curabitur aliquet quam id dui posuere blandit. Praesent
                    sapien massa
                    <br /> convallis a pellentesque nec, egestas non nisi.
                  </p>
                  <Link to="/contact" className="btn btn-primary animated3">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slideshow
