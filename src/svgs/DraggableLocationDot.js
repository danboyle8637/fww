import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

import MorphSVG from "../greensock/MorphSVGPlugin";

class DraggableLocationDot extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    this.morphSVG = MorphSVG;

    this.dotRef = null;
    this.kettlebellRef = null;

    this.setDotRef = element => {
      this.dotRef = element;
    };

    this.setKettlebellRef = element => {
      this.kettlebellRef = element;
    };

    this.tl = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.tl.add(
      TweenMax.to(this.dotRef, 0.3, {
        morphSVG: this.kettlebellRef,
        fill: "#5afdf2",
        stroke: "#5afdf2",
      })
    );
  }

  componentDidUpdate() {
    if (this.props.active) {
      this.tl.play();
    }

    if (!this.props.active) {
      this.tl.reverse();
    }
  }

  componentWillUnmount() {
    this.tl.kill(null, this.kettlebellRef);
    this.tl.kill(null, this.dotRef);
  }

  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 89 124.1"
      >
        <title>Draggable Indicator Icon</title>
        <g id="active-dot">
          <path
            ref={this.setKettlebellRef}
            id="kettlebell"
            d="M131.06 81.86c2-4 5.49-9.34 6.43-18.35 1.31-12.53-10.39-24-21-28-8-3-37-5-50 10s.93 36.87.93 36.87a44 44 0 1 0 63.61-.51zM80.41 53.17c10.31-8.8 32.45-6.12 38.8 1.89 4 5 3.46 12.86-.94 17.63a44 44 0 0 0-38.27.39c-1.15-1.32-9.25-11.66.41-19.91z"
            transform="translate(-55 -32.9)"
            fill="#5afdf2"
            stroke="#5afdf2"
            strokeMiterlimit="10"
          />
        </g>
        <g id="inactive-dot">
          <path
            ref={this.setDotRef}
            id="dot"
            d="M139.35 112.93A39.85 39.85 0 1 1 99.5 73.08a39.86 39.86 0 0 1 39.85 39.85z"
            transform="translate(-55 -32.9)"
            fill="#b44cff"
            stroke="#b44cff"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
    );
  }
}

export default DraggableLocationDot;
