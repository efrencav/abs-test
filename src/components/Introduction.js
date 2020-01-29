import React from 'react'
import { Link } from "gatsby"
import "../scss/intro.scss";
import Zoom from "../images/others/20years.jpg";

export const Introduction = () => {

    return (

        <div className="zoom-counter">
            <div className="container">
                <div className="zoom-counter__inner">
                    <div className="zoom-counter__card">
                        <div className="zoom-counter__card-title">
                            <img src={Zoom} alt="Zoom background" />
                        </div>
                    </div>
                    <div className="zoom-counter__info">
                        <div className="zoom-counter__subtitle">Abstract</div>
                        <div className="zoom-counter__title">Crafting beautiful experiences
                    </div>
                        <span className="hr_short" />
                        <div className="zoom-counter__text">
                            <p>We are idea-driven, working with a strong focus on design and user experience. We love crafting beautiful, smart and inspired work that focuses on a business’ goals and their customers. We do this across multiple touch points to help organizations achieve their goals.</p>
                        </div>
                        <Link to="/about" className="zoom-counter__read-more zoom-counter__read-more_inverted">more about us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction