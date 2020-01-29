import React from "react"
import Introduction from "../components/Introduction"
import SectionTitle from "../components/SectionTitle"
import Portfolio from "../components/Portfolio"
// import PortfolioSlider from "../components/PortfolioSlider"
import Slider from "react-slick"
import BlogImg4 from "../images/blog/img-4.jpg"
import BlogImg5 from "../images/blog/img-5.jpg"
import BlogImg8 from "../images/blog/img-8.jpg"
import BlogImg9 from "../images/blog/img-9.jpg"
import Navbar from "../components/Navbar"
import Slideshow from "../components/Slideshow"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import "../scss/portfolioSlider.scss"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Services from "../components/Services"


const HomepageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }
  return (
    <>
      <Layout>
      <Helmet>
        <script src={withPrefix('swiper.min.js')} type="text/javascript" />
      </Helmet>
        <SEO/>
        <Navbar />
        <Slideshow/>

        {/* Start About Us Section */}
        <section           
        id="about-section"
        className="pad-t10">        
          <Introduction />
        </section>

        {/* End About Us Section */}
        



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


        

        {/* Start Latest News Section */}
        <section
          id="blog"
          className="pad-t80 pad-b50"
          style={{ backgroundColor: "#f2f2f2" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <SectionTitle
                  titleStyle="text-center"
                  title="News & Events"
                  text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="blog-section">
                  <Slider {...settings} className="row">
                    <div className="col-md-12">
                      <div className="latest-news">
                        <div className="latest-news-img">
                          <img
                            src={BlogImg4}
                            className="img-fluid"
                            alt="blog-post"
                          />
                          <div>
                            <span>Aug</span>
                            <span>07</span>
                          </div>
                        </div>
                        <div className="comment">
                          <p>
                            Posted In: <span>Business, Blog</span>
                          </p>
                          <p>
                            <span>
                              <a href="#">
                                <i className="fa fa-comments"></i>
                              </a>{" "}
                              15
                            </span>
                            <span>
                              <a href="#">
                                <i className="fa fa-eye"></i>
                              </a>{" "}
                              11
                            </span>
                          </p>
                        </div>
                        <h4>
                          <a href="#">
                            Lorem Ipsum is dummy text of type setting industry.
                          </a>
                        </h4>
                        <p>
                          Vivamus magna justo, lacinia eget consectetur convallis
                          at tellus. Lorem ipsum dolor sit consectetur adipiscing
                          elit
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="latest-news">
                        <div className="latest-news-img">
                          <img
                            src={BlogImg8}
                            className="img-fluid"
                            alt="blog-post"
                          />
                          <div>
                            <span>Aug</span>
                            <span>07</span>
                          </div>
                        </div>
                        <div className="comment">
                          <p>
                            Posted In: <span>Business, Blog</span>
                          </p>
                          <p>
                            <span>
                              <a href="#">
                                <i className="fa fa-comments"></i>
                              </a>{" "}
                              15
                            </span>
                            <span>
                              <a href="#">
                                <i className="fa fa-eye"></i>
                              </a>{" "}
                              11
                            </span>
                          </p>
                        </div>
                        <h4>
                          <a href="#">
                            Lorem Ipsum is dummy text of type setting industry.
                          </a>
                        </h4>
                        <p>
                          Vivamus magna justo, lacinia eget consectetur convallis
                          at tellus. Lorem ipsum dolor sit consectetur adipiscing
                          elit
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="latest-news">
                        <div className="latest-news-img">
                          <img
                            src={BlogImg9}
                            className="img-fluid"
                            alt="blog-post"
                          />
                          <div>
                            <span>Aug</span>
                            <span>07</span>
                          </div>
                        </div>
                        <div className="comment">
                          <p>
                            Posted In: <span>Business, Blog</span>
                          </p>
                          <p>
                            <span>
                              <a href="#">
                                <i className="fa fa-comments"></i>
                              </a>{" "}
                              15
                            </span>
                            <span>
                              <a href="#">
                                <i className="fa fa-eye"></i>
                              </a>{" "}
                              11
                            </span>
                          </p>
                        </div>
                        <h4>
                          <a href="#">
                            Lorem Ipsum is dummy text of type setting industry.
                          </a>
                        </h4>
                        <p>
                          Vivamus magna justo, lacinia eget consectetur convallis
                          at tellus. Lorem ipsum dolor sit consectetur adipiscing
                          elit
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="latest-news">
                        <div className="latest-news-img">
                          <img
                            src={BlogImg5}
                            className="img-fluid"
                            alt="blog-post"
                          />
                          <div>
                            <span>Aug</span>
                            <span>07</span>
                          </div>
                        </div>
                        <div className="comment">
                          <p>
                            Posted In: <span>Business, Blog</span>
                          </p>
                          <p>
                            <span>
                              <a href="#">
                                <i className="fa fa-comments"></i>
                              </a>{" "}
                              15
                            </span>
                            <span>
                              <a href="#">
                                <i className="fa fa-eye"></i>
                              </a>{" "}
                              11
                            </span>
                          </p>
                        </div>
                        <h4>
                          <a href="#">
                            Lorem Ipsum is dummy text of type setting industry.
                          </a>
                        </h4>
                        <p>
                          Vivamus magna justo, lacinia eget consectetur convallis
                          at tellus. Lorem ipsum dolor sit consectetur adipiscing
                          elit
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Latest News Section */}

      </Layout>
    </>
  )
}

export default HomepageSlider
