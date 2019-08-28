import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section className="third-section">
        <h3 className="third-section__label">Personal Projects</h3>
        <div className="third-section__underline"></div>
        <div className="third-section__content">
          <div className="project">
            <div className="project__image bwettig_static"></div>
            <div className="project__text">
              <div className="project__header">Portfolio Site</div>
              <div className="project__description">
                Coded from the ground up, this is a simple static site to give a
                bit of background about myself, as well as display some of the
                side projects i've been up to recently. Feel free to contact me
                with any inquiries, collaborations, questions, or sport climbing
                requests!
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
          {/* TODO Add Icon Links for GitHub, NPM, Demo sites (bottom left) */}
          {/* TODO Add tech tags i.e. 'Node.JS' 'React' 'Pupeteer' (bottom right) */}
          {/* TODO Modify project component to React Component */}
          <div className="project">
            <div className="project__image project-init"></div>
            <div className="project__text">
              <div className="project__header">Project-Init - CLI Tool</div>
              <div className="project__description">
                A CLI tool designed to initialize a local workspace based upon
                type, with options for downloading dependancies and initialize a
                local/remote git repository. Credit due to:
                <br />
                <a href="https://www.twilio.com/blog/how-to-build-a-cli-with-node-js">
                  Twilio
                </a>
                for the idea, but i've flushed it out a bit more and put my own
                spin on it.
              </div>
              <div className="project__external-link">
                <span className="fa-stack fa-lg fa--color-black">
                  <i className="fa fa-arrow-right fa-stack-1x"></i>
                </span>
                <a
                  href="https://github.com/bradford-james/project-init"
                  className="project__external-link-text"
                >
                  Link to Project
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__image quotify-screenshot"></div>
            <div className="project__text">
              <div className="project__header">Quoter - CLI Tool</div>
              <div className="project__description">
                Project consists of a simple cli-tool that will retrieve a
                random quote, upon using the command 'quoter', to lighten up
                your terminal as you work and possibly provide that spark of
                inspiration that's been eluding you
              </div>
              <div className="project__external-link">
                <span className="fa-stack fa-lg fa--color-black">
                  <i className="fa fa-arrow-right fa-stack-1x"></i>
                </span>
                <a
                  href="https://github.com/bradford-james/quoter"
                  className="project__external-link-text"
                >
                  Link to Project
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project__image enlighten"></div>
            <div className="project__text">
              <div className="project__header">Enlighten - CLI Tool</div>
              <div className="project__description">
                Will allow for inputting a subject and have the top comment from
                a top rated Medium article returned, with a link to read the
                article. Uses Node.JS library Puppeteer to retrieve a sited
                comment based upon given criteria.
              </div>
              <div className="project__external-link">- Coming Soon!</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
