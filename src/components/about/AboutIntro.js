import React from 'react'
import { Link } from "gatsby"
import "../../scss/style.scss"
import "../../scss/responsive.scss"


export const AboutIntro = () => {
    return (
        <div>
            <div className="cards-block">
      <div className="cards-block__head">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-5">
              <div className="cards-block__title">A digital studio crafting beautiful experiences and premium designs.</div>
            </div>
            <div className="col-12 col-lg-6 offset-xl-1">
              <div className="cards-block__text">We are idea-driven, working with a strong focus on design and user experience. We love crafting beautiful, smart and inspired work that focuses on a business’ goals and their customers. We do this across multiple touch points to help organizations achieve their goals.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="container-fluid">
          <div className="row">
            <div className="cards__item col-12 col-md-6 col-xl-3">
              <Link to="/" className="cards__item-inner">
                <span className="cards__item-content"><span className="cards__item-index">01</span><span className="cards__item-title">Branding</span><span className="cards__item-text">Successful companies have clear & cohesive brand identities.</span><span
                  className="cards__arrow icon-chevron-right"></span></span>
              </Link>
            </div>
            <div className="cards__item col-12 col-md-6 col-xl-3">
              <Link to="/" className="cards__item-inner">
                <span className="cards__item-content"><span className="cards__item-index">02</span><span className="cards__item-title">Web Design & Development</span><span className="cards__item-text">Give your customers the crafted, user-friendly websites they deserve.</span><span
                  className="cards__arrow icon-chevron-right"></span></span>
              </Link>
            </div>
            <div className="cards__item col-12 col-md-6 col-xl-3">
              <Link to="/" className="cards__item-inner">
                <span className="cards__item-content"><span className="cards__item-index">03</span><span className="cards__item-title">Graphic Design</span><span className="cards__item-text">We bring your ideas to life.</span><span
                  className="cards__arrow icon-chevron-right"></span></span>
              </Link>
            </div>
            <div className="cards__item col-12 col-md-6 col-xl-3">
              <Link className="cards__item-inner">
                <span className="cards__item-content"><span className="cards__item-index">04</span><span className="cards__item-title">Packaging Design</span><span className="cards__item-text">We design packaging materials that stand out in the crowd.</span><span
                  className="cards__arrow icon-chevron-right"></span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default AboutIntro