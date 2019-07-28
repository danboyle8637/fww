import React, { Component } from "react";
import "../components/Website/TheApp/TheApp.css";

class FitnessNumberIcon extends Component {
  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        id="fitness-number"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 224.17 225.53"
      >
        <path
          fill="none"
          stroke="#545885"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="22"
          d="M53.47 31.33l41.72 179.2M123.59 15l41.72 179.21M194.21 58.11L15 99.83M209.17 122.39l-179.2 41.72"
        />
      </svg>
    );
  }
}

export default FitnessNumberIcon;
