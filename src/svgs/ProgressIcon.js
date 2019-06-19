import React, { Component } from "react";

class ProgressIcon extends Component {
  render() {
    const {
      width,
      height,
      className,
      gradientId = "progressIconGradient",
    } = this.props;

    return (
      <svg
        id="progress-icon"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 219.2 219.2"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="15.9"
            y1="125.5"
            x2="235.1"
            y2="125.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#b44cff" />
            <stop offset=".45" stopColor="#88a2f9" />
            <stop offset=".83" stopColor="#67e4f4" />
            <stop offset="1" stopColor="#5afdf2" />
          </linearGradient>
        </defs>
        <circle
          id="loader-background"
          cx="109.6"
          cy="109.6"
          r="92.5"
          fill="none"
          stroke="#101010"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeWidth="34.2"
        />
        <path
          id="loader-path"
          d="M125.5 33A92.5 92.5 0 1 1 33 125.5"
          transform="translate(-15.9 -15.9)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeWidth="34.2"
          stroke={`url(#${gradientId})`}
        />
      </svg>
    );
  }
}

export default ProgressIcon;
