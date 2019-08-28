import React, { Component } from "react";
import headShot from "./../lib/headshot2.PNG";

class Title extends Component {
  render() {
    return (
      <section className="title">
        <div className="title__background"></div>
        <div className="title__headshot">
          <img src={headShot} alt="Bradford Jameson Wettig"></img>
        </div>
        <h1 className="title__name">Bradford Wettig</h1>
        <div className="title__buttons">
          <a>
            <button id="contact_info_button" type="button">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              Contact
            </button>
          </a>
          <a href="/lib/resume_brad_wettig.pdf" download>
            <button type="button">
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              Download CV
            </button>
          </a>
        </div>
      </section>
    );
  }
}

export default Title;
