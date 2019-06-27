import React, { Component } from "react";

class ProgressLoader extends Component {
  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        id="progress-loader"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 171 171"
      >
        <defs>
          <linearGradient
            id="progressLoaderGradient"
            x1="3"
            y1="85.5"
            x2="168"
            y2="85.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#b44cff" />
            <stop offset=".45" stopColor="#88a2f9" />
            <stop offset=".83" stopColor="#67e4f4" />
            <stop offset="1" stopColor="#5afdf2" />
          </linearGradient>
        </defs>
        <circle
          id="progress-background"
          cx="85.5"
          cy="85.5"
          r="69.5"
          fill="none"
          stroke="#0e0e0f"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeWidth="32"
        />
        <circle
          id="progress"
          cx="85.5"
          cy="85.5"
          r="69.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeWidth="26"
          stroke="url(#progressLoaderGradient)"
        />
      </svg>
    );
  }
}

export default ProgressLoader;
