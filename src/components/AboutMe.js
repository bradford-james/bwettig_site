import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <section className="second-section">
        <h3 className="second-section__label">About Me</h3>
        <div className="second-section__underline"></div>
        {/* TODO Update Blurb (make better) */}
        <div className="second-section__columns">
          <p>
            Grew up an engineer-to-be city kid, moved out to a small town, ran
            away to a smaller town (College Station, in its own way, is both
            quite large and quite small), then ran even farther to the Nordic
            Sea, before landing back in good 'ol Austin, Texas.
          </p>
          <p>
            After all the traveling, turns out there's a familiarity to home you
            just can't find anywhere else.
          </p>
          <p>
            Harder to satisfy though is the endless curiosities of our fast
            paced world, driven by constant innovations and further questions.
            In that way, software development has proven to be a worthy outlet
            to exercise some of that curiosity and has become something of a
            passion of mine.
          </p>
          <p>
            What started as a transitional gig (while realigning my career as an
            engineer from the offshore oilfield to something closer to home and
            family) has become a career path that I've embraced entirely and
            tirelessly. I skim articles from Morning Cup of Coffee before I get
            out of bed in the morning, listen to Real Talk Javascript as I drive
            to work, and browse Medium during lunch!
          </p>
          <p>
            At the moment, I'm fully entrenched in expanding my understanding of
            what it takes to write good code. Feel free to check out some of the
            work below that I've got going at the moment, or my GitHub page as
            well where collaboration is more than welcome.
          </p>
          <div className="second-section__card">
            <p className="second-section__card-header">Some quick hitters:</p>
            <ul className="second-section__card-list">
              <li className="second-section__card-list-item">
                I'm a bit of a DIY kind of guy, including amatuer mechanic
                tinkering, my time as an apartment handyman, and as a shop
                machinist
              </li>
              <li className="second-section__card-list-item">
                Big outdoors enthusiast, most notably climbing/mountaineering.
              </li>
              <li className="second-section__card-list-item">
                Music! I've been dabbling in guitar and other various stringed
                instruments for most of my life
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
