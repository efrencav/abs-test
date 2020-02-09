import React from 'react'
import "../../scss/style.scss"
import "../../scss/responsive.scss"

export const Awards = () => {
    return (
        <div className="awards-block">
        <div className="container">
          <div className="heading-group heading-group heading-group_centered">
            <div className="heading-group__subtitle">our winning</div>
            <div className="heading-group__title">Achievements & Prizes</div>
          </div>
          <div className="awards-block__body">
            <div className="awards-block__item">
              <div className="awards-block__year">2019</div>
              <div className="awards-block__list">
                <div className="awards-block__text">OAS Development Awards
                  Shortlisted - Best West End New-Build
                  <div className="awards-block__text-footer">Central Bank, Scotland</div>
                </div>
                <div className="awards-block__text">OAS Development Awards
                  Shortlisted - Best City Development
                  <div className="awards-block__text-footer">Capri Ocean Museum</div>
                </div>
                <div className="awards-block__text">Building Awards 2019
                  Shortlisted - Small Project of the Year
                  <div className="awards-block__text-footer">Dustin Villa, Spain</div>
                </div>
                <div className="awards-block__text">OAS Development Awards
                  Shortlisted - Best City Development
                  <div className="awards-block__text-footer">Kristina House, Germny</div>
                </div>
              </div>
            </div>
            <div className="awards-block__item">
              <div className="awards-block__year">2017</div>
              <div className="awards-block__list">
                <div className="awards-block__text">London Planning Awards
                  Shortlisted - Best Place to Work
                  <div className="awards-block__text-footer">Local Financial Office, Iasi, Romania</div>
                </div>
                <div className="awards-block__text">Blueprint Awards
                  Winner – Best Interior Project (Leisure)
                  <div className="awards-block__text-footer">Justin burney Villa, NY</div>
                </div>
              </div>
            </div>
            <div className="awards-block__item">
              <div className="awards-block__year">2016</div>
              <div className="awards-block__list">
                <div className="awards-block__text">Structural Steel Design Awards
                  Winner
                  <div className="awards-block__text-footer">Art Museum, Poland</div>
                </div>
                <div className="awards-block__text">FX Interior Design Awards Shortlisted – Best Leisure
                  <div className="awards-block__text-footer">David Villa, Denmark</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Awards