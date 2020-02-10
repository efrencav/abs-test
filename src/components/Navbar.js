import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
// import { Link } from "gatsby"
import logo from "../images/others/logo-white.svg"

const Navbar = () => {
	const [isOpen, setNav] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const toggleNav = () => {
		setNav(isOpen => !isOpen)
	}

	useEffect(() => {
		window.addEventListener("scroll", () => {
			let pageScroll = window.scrollY > 600

			if (pageScroll) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		})
	})
	return (

		<>
			<nav className={`otheloNav navbar navbar-expand-lg navbar-light navbar-fixed-top ${scrolled ? "navbar-bg" : ""}`}>
				<div className="container">
					<Link className="navbar-brand" to="./" smooth={true} duration={1000}><img src={logo} className="logo" alt="Abstract Logo"></img></Link>
					<button className={isOpen ? `navbar-toggler` : `navbar-toggler collapsed`} type="button" onClick={toggleNav} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<i className="fa fa-bars"></i>
					</button>

					<div className={isOpen ? `collapse navbar-collapse show` : `collapse navbar-collapse`} id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link
									className="nav-link"
									to="hero-banner"
									smooth={true}
									duration={1000}
								>Home</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="about-section"
									smooth={true}
									offset={-60}
									duration={1000}
								>About</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="services"
									smooth={true}
									offset={-60}
									duration={1000}
								>Services</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="portfolio"
									smooth={true}
									offset={-60}
									duration={1000}
								>Works</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="contact"
									smooth={true}
									offset={-60}
									duration={1000}
								>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<Link to={"hero-banner"} smooth={true} duration={1000} id="back-to-top" className={`${scrolled ? "back-to-top reveal" : "back-to-top"}`}>
				<i className="fa fa-angle-up fa-2x"></i>
			</Link>
		</>
	)
}

export default Navbar