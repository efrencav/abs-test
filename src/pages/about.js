import React from "react"
import Layout from "../components/Layout"
import { Link } from "react-scroll"
import AboutIntro from "../components/about/AboutIntro"
import ChooseUs from "../components/about/ChooseUs"
import Awards from "../components/about/Awards"
import BannerBg from "../images/bg/banner.jpg"
import Navbar from "../components/NavbarTwo"
import SEO from "../components/seo"

export default () => {
    return (
        <>
            <Layout>
                <SEO title="About Us" />
                <Navbar />
                <section id="hero-banner" style={{ backgroundImage: `url(${BannerBg})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="preview-banner text-center white">
                                    <h1>About Us</h1>
                                    <p>Multipurpose React Gatsby Onepage Template</p>
                                    <Link to="portfolio" smooth={true} duration={1000} className="btn btn-primary page-scroll">Template Variation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AboutIntro />
                <ChooseUs />
                <Awards />
            </Layout>
        </>
    )
}