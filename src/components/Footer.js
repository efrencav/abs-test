import React from 'react'
import { Link } from 'gatsby'
import Symbol from "../images/others/symbol.png"
import "../css/footer.css"

export const Footer = () => {
    return (
        <footer className="footer-default footer">
            <div className="container">
                <div className="footer-default__head">
                    <Link to="/" className="logo">
                        <Link to="/" className="logo-link">
                            <img className="logo-white" src={Symbol} alt="logo" />
                        </Link>
                    </Link>
                </div>
                <div className="row">
                    <div className="footer-default__column col-12 col-sm-6 col-md-3">
                        <div className="footer-default__group-title">Abstract Creative, LLC</div>
                        <p>Cypress, TX 77429</p>
                        <p>
                            <Link to="mailto:infor@arquito.com">infor@abstract-creative.com</Link>
                        </p>
                        <p>832-390-0527</p>
                    </div>
                    <div className="footer-default__column col-12 col-sm-6 col-md-3">
                        <div className="footer-default__group-title">help center</div>
                        <ul className="footer-default__list">
                            <li className="footer-default__list-item">
                                <Link to="/" className="footer-default__list-link">FAQs</Link>
                            </li>
                            <li className="footer-default__list-item">
                                <Link to="/" className="footer-default__list-link">Terms & Conditions</Link>
                            </li>
                            <li className="footer-default__list-item">
                                <Link to="/" className="footer-default__list-link">Privacy</Link>
                            </li>
                            <li className="footer-default__list-item">
                                <Link to="/" className="footer-default__list-link">Help</Link>
                            </li>
                            <li className="footer-default__list-item">
                                <Link to="/" className="footer-default__list-link">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-default__column col-12 col-sm-6 col-md-3">
                        <div className="footer-default__group-title">quick links</div>
                        <ul className="footer-default__list">
                            <li className="footer-default__list-item">
                                <Link to="/" className="footer-default__list-link">About</Link>
                            </li>
                            <li className="footer-default__list-item">
                                <Link to="/contact" className="footer-default__list-link">Contact</Link>
                            </li>
                            <li className="footer-default__list-item">
                                <Link to="/" className="footer-default__list-link">Services</Link>
                            </li>
                            <li className="footer-default__list-item">
                                <Link to="/" className="footer-default__list-link">Works</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-default__column col-12 col-sm-6 col-md-3">
                        <div className="socials footer-default__socials">
                            <Link to="/" className="socials__social icofont-twitter">
                                <div className="visually-hidden">twitter</div>
                            </Link>
                            <Link to="/" className="socials__social icofont-facebook">
                                <div className="visually-hidden">facebook</div>
                            </Link>
                            <Link to="/" className="socials__social icofont-google-plus">
                                <div className="visually-hidden">google plus</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-default__bottom">
                    <div className="footer-default__copyright">© 2019<strong>Abstract.</strong>All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer