import React, { Component } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="center-column">
          <Header />
          <div className="content">
            <Title />
            {/* TODO update AboutMe section to blog? */}
            <AboutMe />
            <Projects />
            {/* TODO add section - links to other highlights like code challenge sites */}
            {/* TODO add section - Community Voices, pull in tweets from coders */}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
