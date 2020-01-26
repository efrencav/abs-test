import React from 'react'
import Portfolio1 from "../images/slideshow/zoom-slide-image-1.jpg"
import Portfolio2 from "../images/slideshow/zoom-slide-image-2.jpg"
import Portfolio3 from "../images/slideshow/zoom-slide-image-3.jpg"
import Portfolio4 from "../images/slideshow/zoom-slide-image-4.jpg"

export const PortfolioSlider = () => {
    return (
        <div className="zoom-slider zoom-slider zoom-slider_top-offset">
            <div className="zoom-slider__header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-2">
                            <div className="zoom-slider__title">Our works</div>
                        </div>
                        <div className="col-12 col-lg-10 text-lg-right">
                            <div className="zoom-slider__filter">
                                <a className="zoom-slider__filter-link link link link_active" data-value="all" href="#">All</a>
                                <a className="zoom-slider__filter-link link" data-value="architecture" href="#">Architecture</a>
                                <a className="zoom-slider__filter-link link" data-value="residential" href="#">Residential</a>
                                <a className="zoom-slider__filter-link link" data-value="interior" href="#">Interior</a>
                                <a className="zoom-slider__filter-link link" data-value="landscape" href="#">Landscape</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="zoom-slider__slider-wrapper">
                <button className="zoom-slider__control zoom-slider__control_prev icon-chevron-left" type="button">
                    <span className="visually-hidden">prev</span>
                </button>
                <button className="zoom-slider__control zoom-slider__control_next icon-chevron-right" type="button">
                    <span className="visually-hidden">next</span>
                </button>
                <div className="zoom-slider__slider swiper-container">
                    <div className="swiper-wrapper">
                        <div className="zoom-slider__slide swiper-slide" data-filter="residential">{Portfolio1}</div>
                        <div className="zoom-slider__slide swiper-slide" data-filter="architecture">{Portfolio2}</div>
                        <div className="zoom-slider__slide swiper-slide" data-filter="residential">{Portfolio3}</div>
                        <div className="zoom-slider__slide swiper-slide" data-filter="interior">{Portfolio4}</div>
                    </div>
                </div>
                <div className="zoom-slider__buttons swiper-container gallery-thumbs">
                    <div className="swiper-wrapper">
                        <button className="zoom-slider__button zoom-slider__button_active swiper-slide" data-filter="residential" type="button">Residential
            <span className="zoom-slider__button-title">The Beach House</span>
                        </button>
                        <button className="zoom-slider__button swiper-slide" data-filter="architecture" type="button">Architecture
            <span className="zoom-slider__button-title">Central Bank, Scotland</span>
                        </button>
                        <button className="zoom-slider__button swiper-slide" data-filter="residential" type="button">Residential
            <span className="zoom-slider__button-title">David Villa, Denmark</span>
                        </button>
                        <button className="zoom-slider__button swiper-slide" data-filter="interior" type="button">Interior
            <span className="zoom-slider__button-title">B6-No.5 House Interior</span>
                        </button>
                        <button className="zoom-slider__button swiper-slide" data-filter="landscape" type="button">Landscape
            <span className="zoom-slider__button-title">Central Bank, Scotland</span>
                        </button>
                        <button className="zoom-slider__button swiper-slide" data-filter="residential" type="button">Residential
            <span className="zoom-slider__button-title">David Villa, Denmark</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSlider