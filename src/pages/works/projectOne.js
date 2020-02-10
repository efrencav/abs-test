import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
// import SectionTitle from "../../components/SectionTitle"
import ProjectDesc from "../../components/works/ProjectDescription"
import BannerBg from "../../images/bg/banner.jpg"
import "../../css/themefy-icons.css"
import Navbar from "../../components/NavbarTwo"
import SEO from "../../components/seo"

export default () => {
    return (
        <>
            <Layout>
                <SEO title="Project One" />
                <Navbar />
                <section id="back-to-top" style={{ backgroundImage: `url(${BannerBg})` }}>
                    <div classNameName="container">
                        <div classNameName="row">
                            <div classNameName="col-md-12">
                                <div classNameName="preview-banner text-center white">
                                    <h1>Project One</h1>
                                    <p>Multipurpose React Gatsby Onepage Template</p>
                                    <Link to="portfolio" smooth={true} duration={1000} classNameName="btn btn-primary page-scroll">Template Variation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Start Project Description Section */}
                <ProjectDesc />
                {/* EndProject Description  Section */}
                <section className="padding-100px-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 margin-30px-bottom wow fadeInUp">
                                <img src="http://placehold.it/1200x752" className="width-100" alt="" />
                            </div>
                            <div className="col-md-12 margin-30px-bottom wow fadeInUp">
                                <img src="http://placehold.it/1200x675" className="width-100" alt="" />
                            </div>
                            <div className="col-md-12 margin-30px-bottom wow fadeInUp">
                                <img src="http://placehold.it/1200x675" className="width-100" alt="" />
                            </div>
                            <div className="col-md-12 margin-30px-bottom wow fadeInUp">
                                <img src="http://placehold.it/1200x675" className="width-100" alt="" />
                            </div>
                            <div className="col-md-12 margin-30px-bottom wow fadeInUp">
                                <img src="http://placehold.it/1200x675" className="width-100" alt="" />
                            </div>
                            <div className="col-md-12 wow fadeInUp">
                                <img src="http://placehold.it/2560x1440" className="width-100" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="border-top border-width-1 border-color-medium-gray no-padding">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="display-table width-100 padding-30px-lr sm-padding-15px-lr">
                                <div className="width-45 text-left display-table-cell vertical-align-middle">
                                    <div className="blog-nav-link blog-nav-link-prev text-extra-dark-gray">
                                        <span className="text-medium-gray text-extra-small display-block text-uppercase xs-display-none">Previous Project</span>
                                        <Link to="single-project-page-07.html">
                                            <i className="ti-arrow-left blog-nav-icon"></i>
                                            Restaurant Photography
                                        </Link>
                                    </div>
                                </div>
                                <div className="width-10 text-center display-table-cell vertical-align-middle">
                                    <Link to="works/projectOne/" className="blog-nav-link blog-nav-home"><i className="ti-layout-grid2-alt"></i></Link>
                                </div>
                                <div className="width-45 text-right display-table-cell vertical-align-middle">
                                    <div className="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                                        <span className="text-medium-gray text-extra-small display-block text-uppercase xs-display-none">Next Project</span>
                                        <Link to="works/projectOne/">
                                            <i className="ti-arrow-right blog-nav-icon"></i>
                                            Mammut Adventure
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}