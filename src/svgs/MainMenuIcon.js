import React, { Component } from "react";
import { TimelineMax, Sine } from "gsap";

import { MenuContext } from "../context/MenuContext";
import morphSVG from "../greensock/MorphSVGPlugin";

class MainMenuIcon extends Component {
  static contextType = MenuContext;

  constructor(props) {
    super(props);

    // eslint-disable-next-line
    this.morphSVG = morphSVG;

    this.menuTopBar = null;
    this.menuMiddleBar = null;
    this.menuBottomBar = null;
    this.closeRightCross = null;
    this.closeLeftCross = null;

    this.setMenuTopBarRef = element => {
      this.menuTopBar = element;
    };

    this.setMenuMiddleBarRef = element => {
      this.menuMiddleBar = element;
    };

    this.setMenuBottomBarRef = element => {
      this.menuBottomBar = element;
    };

    this.setCloseRightCross = element => {
      this.closeRightCross = element;
    };

    this.setCloseLeftCross = element => {
      this.closeLeftCross = element;
    };

    this.tl = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.tl
      .to(this.menuMiddleBar, 0.1, {
        x: -100,
        autoAlpha: 0,
        ease: Sine.easeOut,
      })
      .to(this.menuTopBar, 0.1, {
        morphSVG: this.closeRightCross,
        stroke: "#5AFDF2",
        ease: Sine.easeOut,
      })
      .to(this.menuBottomBar, 0.1, {
        morphSVG: this.closeLeftCross,
        stroke: "#5AFDF2",
        ease: Sine.easeOut,
      })
      .to([this.menuTopBar, this.menuBottomBar], 0.2, {
        transformOrigin: "50% 50%",
        scale: 0.6,
      })
      .to([this.menuTopBar, this.menuBottomBar], 0.2, {
        transformOrigin: "50% 50%",
        scale: 1,
        rotation: 360,
      });
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    const [menuState, dispatch] = this.context;

    if (menuState.isOpen) {
      this.tl.play();
    } else {
      this.tl.reverse();
    }
  }

  componentWillUnmount() {
    this.tl.kill();
  }

  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 299.5 226.36"
        // viewBox="0 0 282.5 209.36"
      >
        <title>Main Menu Icon</title>
        <g
          id="close-menu-icon"
          fill="#fff"
          stroke="#b44cff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="34"
        >
          <path
            ref={this.setCloseRightCross}
            id="right-cross"
            d="M53.82 192.36l75.66-75.66 99.7-99.7"
          />
          <path
            ref={this.setCloseLeftCross}
            id="left-cross"
            d="M229.18 192.36l-75.66-75.66L53.82 17"
          />
        </g>
        <g
          id="menu-icon"
          fill="#fff"
          stroke="#d7daff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="34"
        >
          <path
            ref={this.setMenuTopBarRef}
            id="top-menu-bar"
            d="M17 17.18h248"
          />
          <path
            ref={this.setMenuMiddleBarRef}
            id="middle-menu-bar"
            d="M104.5 104.74h161"
          />
          <path
            ref={this.setMenuBottomBarRef}
            id="bottom-menu-bar"
            d="M55.5 192.3h210"
          />
        </g>
      </svg>
    );
  }
}

export default MainMenuIcon;
