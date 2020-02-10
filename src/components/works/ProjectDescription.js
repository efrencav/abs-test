import React from 'react'
import "../../scss/projectDesc.scss"

export const ProjectDescription = () => {
    return (
        <section className="bg-light-gray big-section">
            <div className="container padding-two-tb">
                <div className="row">
                    <div className="col-md-12 text-center margin-60px-bottom sm-margin-50px-bottom xs-margin-30px-bottom">
                        <span className="width-60 center-col text-outside-line alt-font xs-width-100 xs-padding-15px-lr xs-display-inline-block">Branding &nbsp;&nbsp; • &nbsp;&nbsp; Design &nbsp;&nbsp; • &nbsp;&nbsp; Web</span>
                        <h1 className="text-extra-dark-gray alt-font letter-spacing-minus-1 font-weight-600 display-block margin-10px-top">Spice Blends</h1>
                    </div>
                    <div className="col-md-6 col-md-offset-1 line-height-28 last-paragraph-no-margin sm-margin-50px-bottom xs-margin-30px-bottom">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                    <div className="col-md-4 col-md-offset-1 line-height-26">
                        <ul className="list-style-6 margin-twelve-left">
                            <li className="margin-5px-bottom"><label className="width-30 display-inline-block">Client:</label> Jason Richardson</li>
                            <li className="margin-5px-bottom"><label className="width-30 display-inline-block">Industry:</label> Adventure  /  Travel</li>
                            <li className="margin-5px-bottom"><label className="width-30 display-inline-block">Services:</label> Design, Art Direction, Website</li>
                            <li className="margin-5px-bottom"><label className="width-30 display-inline-block">Date:</label> January 16th, 2017</li>
                            <li className="margin-5px-bottom"><label className="width-30 display-inline-block">Website:</label><a href="#"> www.spiceblends.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDescription