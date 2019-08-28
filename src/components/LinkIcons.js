import React, { Component } from "react";

class LinkIcons extends Component {
  render() {
    return (
      <div className="header__icons">
        <span className="fa-stack fa-lg">
          <a
            href="https://www.facebook.com/brad.wettig"
            target="_blank"
            className="fa fa-facebook fa-stack-1x fa-inverse"
          ></a>
        </span>
        <span className="fa-stack fa-lg">
          <a
            href="https://linkedin.com/in/brad-wettig"
            target="_blank"
            className="fa fa-linkedin fa-stack-1x fa-inverse"
          ></a>
        </span>
        <span className="fa-stack fa-lg">
          <a
            href="https://github.com/bradford-james"
            target="_blank"
            className="fa fa-github fa-stack-1x fa-inverse"
          ></a>
        </span>
      </div>
    );
  }
}

export default LinkIcons;
