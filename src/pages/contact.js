import React from "react"
import Layout from "../components/Layout"
import { Link } from "react-scroll"
import ContactSection from "../components/ContactSection"

import BannerImage from "../images/preview/parallax.jpg"
import SliderImage from "../images/preview/revolution-slider.jpg"
import BannerBg from "../images/bg/banner.jpg"
import SectionTitle from "../components/SectionTitle"
import Navbar from "../components/NavbarTwo"


import SEO from "../components/SEO"

export default () => {
    return (
        <>
            <Layout>
                <SEO />
                <Navbar />
                <ContactSection />
            </Layout>
        </>
    )
}