import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
// import ContactSection from "../../components/ContactSection"


import SliderImage from "../../images/preview/revolution-slider.jpg"
import BannerBg from "../../images/bg/banner.jpg"
import SectionTitle from "../../components/SectionTitle"
import Navbar from "../../components/NavbarTwo"
import Services from "../../components/Services"



import SEO from "../../components/SEO"

export default () => {
    return (
        <>
            <Layout>
                <SEO title="Digital" />
                <Navbar />
                <section id="hero-banner" style={{ backgroundImage: `url(${BannerBg})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="preview-banner text-center white">
                                    <h1>Digital</h1>
                                    <p>Multipurpose React Gatsby Onepage Template</p>
                                    <Link to="portfolio" smooth={true} duration={1000} className="btn btn-primary page-scroll">Template Variation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="pad-t100 pad-b70 parallax" style={{ backgroundColor: "#fff" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <SectionTitle titleStyle="text-center" title="Features" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature-2">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="feature-icon text-center">
                                                <i className="icon-genius"></i>
                                            </div>
                                        </div>
                                        <div className="media-body ml-3">
                                            <a href="#">
                                                <h3 className="media-heading">Latest Gatsby JS</h3>
                                            </a>
                                            <p>We are using here latest version of Gatsby Framework. And we will update it.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-2">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="feature-icon text-center">
                                                <i className="icon-aperture"></i>
                                            </div>
                                        </div>
                                        <div className="media-body ml-3">
                                            <a href="#">
                                                <h3 className="media-heading">FontAwesome icon</h3>
                                            </a>
                                            <p>We are using here 4.7.0 version of FontAwesome icon. And we will update it.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-2">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="feature-icon text-center">
                                                <i className="icon-layers"></i>
                                            </div>
                                        </div>
                                        <div className="media-body ml-3">
                                            <a href="#">
                                                <h3 className="media-heading">ET Line icon Pack</h3>
                                            </a>
                                            <p>Bonding is integrated with ET Line icon pack. When update come then We will update.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-2">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="feature-icon text-center">
                                                <i className="icon-clock"></i>
                                            </div>
                                        </div>
                                        <div className="media-body ml-3">
                                            <a href="#">
                                                <h3 className="media-heading">React Bootstrap</h3>
                                            </a>
                                            <p>Othelo is integrated with famous react-bootstrap which is built with Bootstrap 4. Be Happy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-2">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="feature-icon text-center">
                                                <i className="icon-beaker"></i>
                                            </div>
                                        </div>
                                        <div className="media-body ml-3">
                                            <a href="#">
                                                <h3 className="media-heading">Responsive Design</h3>
                                            </a>
                                            <p>Our Template is 100% responsive. Before release we tested it in many device.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-2">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="feature-icon text-center">
                                                <i className="icon-bargraph"></i>
                                            </div>
                                        </div>
                                        <div className="media-body ml-3">
                                            <a href="#">
                                                <h3 className="media-heading">Browser Compatible</h3>
                                            </a>
                                            <p>This Template is compatible in every web browser. We tested in chrome, mozilla, EDGE and result is fine.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Start Service Section */}
                    <section
                    id="services"
                    className="pad-t80"
                    style={{ backgroundColor: "#f3f3f3" }}
                >
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <SectionTitle
                            titleStyle="text-center"
                            title="Our Services"
                            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                            erat ut turpis. Suspendisse urna nibh, viverra non, semper
                            suscipit, posuere a, pede. Donec nec justo"
                        />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <Services />
                        </div>
                    </div>
                    </div>
                </section>
                {/* End Service Section */}

                {/* Call to action */}
                <section className="pad80 footer-minimal" style={{ backgroundColor: "#1cbac8" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3>Othelo</h3>
                                <div className="copyright-text">
                                    <p>Copyright © All Rights Reserved. Developed by <a href="#">TheShahriyar</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Call to action */}
            </Layout>
        </>
    )
}