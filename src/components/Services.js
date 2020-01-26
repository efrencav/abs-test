import React from 'react'
import "../scss/services.scss"
import { Link } from 'gatsby'

export const Services = () => {
    return (
        <div className="zoom-services">
            <div className="container">
                <div className="zoom-services__wrapper zoom-services__wrapper zoom-services__wrapper_bordered">
                    <div className="zoom-services__list">
                        <Link to="/" className="zoom-services__item">
                            <span className="black">
                                <span className="zoom-services__item-title">Branding</span>
                                <span className="zoom-services__item-text">Successful companies have clear & cohesive brand identities.</span>
                                <span className="zoom-services__item-footer"><span className="zoom-services__item-icon icon-apartment"></span>
                                    <span className="zoom-services__more orange">more</span>
                                </span>
                            </span>
                        </Link>

                        <Link to="/" className="zoom-services__item" >
                            <span className="black">
                                <span className="zoom-services__item-title">Digital</span>
                                <span className="zoom-services__item-text">Effective online communications to promote our clients’ businesses.</span>
                                <span className="zoom-services__item-footer">
                                    <span className="zoom-services__item-icon icon-home"></span>
                                    <span className="zoom-services__more orange">more</span>
                                </span>
                            </span>
                        </Link>

                        <Link to="/" className="zoom-services__item" >
                            <span className="black">
                                <span className="zoom-services__item-title">Print</span>
                                <span className="zoom-services__item-text">Print media gives you the opportunity to engage with a target audience.</span>
                                <span className="zoom-services__item-footer">
                                    <span className="zoom-services__item-icon icon-home"></span>
                                    <span className="zoom-services__more orange">more</span>
                                </span>
                            </span>
                        </Link>

                        <Link to="/" className="zoom-services__item" >
                            <span className="black">
                                <span className="zoom-services__item-title">Advertising</span>
                                <span className="zoom-services__item-text">Establish an emotional connection with consumers.</span>
                                <span className="zoom-services__item-footer">
                                    <span className="zoom-services__item-icon icon-home"></span>
                                    <span className="zoom-services__more orange">more</span>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services