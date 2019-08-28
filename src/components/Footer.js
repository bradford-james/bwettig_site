import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3 className="footer__label" id="contact_info_section">
          Contact Information
        </h3>
        <div className="footer__underline"></div>
        <div className="footer__bulletins">
          <div className="footer__bulletin">
            <span className="fa-stack fa-lg">
              <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
            </span>
            <div className="footer__bulletin-text">bradwettig@gmail.com</div>
          </div>
          <div className="footer__bulletin">
            <span className="fa-stack fa-lg">
              <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
            </span>
            <div className="footer__bulletin-text">713 . 540 . 8626</div>
          </div>
          <div className="footer__bulletin">
            <span className="fa-stack fa-lg">
              <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
            </span>
            <div className="footer__bulletin-text">Leander, Tx 78641</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
