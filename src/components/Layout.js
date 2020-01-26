import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/animate.css"
import "../css/lineicon.css"
import "../css/font-awesome.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../scss/style.scss"
import "../scss/responsive.scss"
import Footer from "../components/Footer"



const Layout = ({ children }) => {
    return (
        <div id="page-wrapper">
            {children}
            <Footer />

        </div>
    )
}

export default Layout
