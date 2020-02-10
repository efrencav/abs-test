import React from 'react'
import { Link } from "gatsby"
import "../../scss/style.scss"
import "../../scss/responsive.scss"
import Services from "../../components/Services"



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
        <Services />
      </div>
    </div>
  )
}

export default AboutIntro