import React from "react"
import { Link } from "gatsby"

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>
              Find out {"more about us"}
              <Link to="/contact" className="btn btn-primary white-border">
                Contact Us
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
