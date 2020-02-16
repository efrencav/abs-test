import React from 'react'
import "../../scss/style.scss"
import "../../scss/responsive.scss"
import SectionTitle from "../../components/SectionTitle"

export const ChooseUs = () => {
    return (
        <div class="features-block">
        <div class="container">
        <div class="features-block__subtitle">Why Choose Us</div>
        <SectionTitle
                  titleStyle="text-center"
                  title="What makes us different?"
                  text="Was likeness brought divided given fruit in wherein lights green hath third bring let creeping. Third them firmament give green Creature night first"
                />
          {/* <div class="features-block__title">What makes us different?</div>
          <div class="features-block__text">Was likeness brought divided given fruit in wherein lights green hath third bring let creeping. Third them firmament give green Creature night first
            creature.
          </div> */}
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="features-block__item">
                <div class="features-block__feature-icon icon-compass"></div>
                <div class="features-block__feature-title">Dedicated Team</div>
                <div class="features-block__feature-text">Was likeness brought divided given fruit inwherein lights green hath third bring let creeping.</div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="features-block__item">
                <div class="features-block__feature-icon icon-clock"></div>
                <div class="features-block__feature-title">Dedicated Team</div>
                <div class="features-block__feature-text">Was likeness brought divided given fruit inwherein lights green hath third bring let creeping.</div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="features-block__item">
                <div class="features-block__feature-icon icon-megaphone"></div>
                <div class="features-block__feature-title">Dedicated Team</div>
                <div class="features-block__feature-text">Was likeness brought divided given fruit inwherein lights green hath third bring let creeping.</div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="features-block__item">
                <div class="features-block__feature-icon icon-gears"></div>
                <div class="features-block__feature-title">Dedicated Team</div>
                <div class="features-block__feature-text">Was likeness brought divided given fruit inwherein lights green hath third bring let creeping.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ChooseUs