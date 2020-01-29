import React from "react"
import Layout from "../../components/Layout"
// import { Link } from "react-scroll"
// import ContactSection from "../../components/ContactSection"

// import BannerImage from "../../images/preview/parallax.jpg"
import SliderImage from "../../images/preview/revolution-slider.jpg"
// import BannerBg from "../../images/bg/banner.jpg"
import SectionTitle from "../../components/SectionTitle"
import Navbar from "../../components/NavbarTwo"
import Services from "../../components/Services"



import SEO from "../../components/SEO"

export default () => {
    return (
        <>
            <Layout>
                <SEO />
                <Navbar />
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