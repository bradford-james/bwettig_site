import React, { Component } from "react";
import LinkIcons from "./LinkIcons";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__content">
          <div className="header__title">Portfolio</div>
          <LinkIcons />
        </div>
        <div className="header__line"></div>
      </header>
    );
  }
}

export default Header;
