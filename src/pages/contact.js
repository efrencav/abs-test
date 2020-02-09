import React from "react"
import Layout from "../components/Layout"
import { Link } from "react-scroll"
import ContactSection from "../components/ContactSection"

// import BannerImage from "../images/preview/parallax.jpg"
// import SliderImage from "../images/preview/revolution-slider.jpg"
import BannerBg from "../images/bg/banner.jpg"
// import SectionTitle from "../components/SectionTitle"
import Navbar from "../components/NavbarTwo"


import SEO from "../components/SEO"

export default () => {
    return (
        <>
            <Layout>
                <SEO title="Contact Us" />
                <Navbar />
                <section id="hero-banner" style={{ backgroundImage: `url(${BannerBg})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="preview-banner text-center white">
                                    <h1>Contact Us</h1>
                                    <p>Multipurpose React Gatsby Onepage Template</p>
                                    <Link to="portfolio" smooth={true} duration={1000} className="btn btn-primary page-scroll">Template Variation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactSection />
            </Layout>
        </>
    )
}