import React, { Component } from "react"

class MainMenuIcon extends Component {
  render() {
    const { width, height, className } = this.props

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 282.5 209.36"
      >
        <g
          id="close-menu-icon"
          fill="#fff"
          stroke="#b44cff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="34"
        >
          <path id="right-cross" d="M53.82 192.36l75.66-75.66 99.7-99.7" />
          <path id="left-cross" d="M229.18 192.36l-75.66-75.66L53.82 17" />
        </g>
        <g
          id="menu-icon"
          fill="#fff"
          stroke="#d7daff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="34"
        >
          <path id="top-menu-bar" d="M17 30.18h248" />
          <path id="middle-menu-bar" d="M104.5 102.74h161" />
          <path id="bottom-menu-bar" d="M55.5 175.3h210" />
        </g>
      </svg>
    )
  }
}

export default MainMenuIcon
