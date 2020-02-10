import React from "react"
import Layout from "../../components/Layout"
import { Link } from "react-scroll"
import SectionTitle from "../../components/SectionTitle"
import Portfolio from "../../components/Portfolio"

// import BannerImage from "../images/preview/parallax.jpg"
// import SliderImage from "../images/preview/revolution-slider.jpg"
import BannerBg from "../../images/bg/banner.jpg"
import Services from "../../components/Services"
// import SectionTitle from "../components/SectionTitle"
import Navbar from "../../components/NavbarTwo"
import SEO from "../../components/seo"

export default () => {
    return (
        <>
            <Layout>
                <SEO title="Works" />
                <Navbar />
                <section id="hero-banner" style={{ backgroundImage: `url(${BannerBg})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="preview-banner text-center white">
                                    <h1>Works</h1>
                                    <p>Multipurpose React Gatsby Onepage Template</p>
                                    <Link to="portfolio" smooth={true} duration={1000} className="btn btn-primary page-scroll">Template Variation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Start Portfolio Section */}
                <section id="portfolio" className="pad-t80 pad-b50">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle
                        titleStyle="text-center"
                        title="Awarded Work"
                        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                        erat ut turpis. Suspendisse urna nibh, viverra non, semper
                        suscipit, posuere a, pede. Donec nec justo"
                    />
                    </div>
                </div>
                <Portfolio />
                </div>
                </section>
                {/* End Portfolio Section */}
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
            
            </Layout>
        </>
    )
}