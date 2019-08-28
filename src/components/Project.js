import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="project__image bwettig_static"></div>
        <div className="project__text">
          <div className="project__header">Portfolio Site</div>
          <div className="project__description">
            Coded from the ground up, this is a simple static site to give a bit
            of background about myself, as well as display some of the side
            projects i've been up to recently. Feel free to contact me with any
            inquiries, collaborations, questions, or sport climbing requests!
          </div>
          <div className="project__external-link">
            <span className="fa-stack fa-lg fa--color-black">
              <i className="fa fa-arrow-right fa-stack-1x"></i>
            </span>
            <a
              href="https://github.com/bradford-james/bwettig_static"
              className="project__external-link-text"
            >
              Link to Project
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
