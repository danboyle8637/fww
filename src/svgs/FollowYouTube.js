import React, { Component } from "react";

class FollowYouTube extends Component {
  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        id="follow-me-youtube"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 600 279.93"
      >
        <defs>
          <linearGradient
            id="followYouTubeGradient"
            x1="123.48"
            y1="305.59"
            x2="463.86"
            y2="-13.79"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".14" stopColor="#c0171d" />
            <stop offset=".42" stopColor="#c71b1f" />
            <stop offset=".84" stopColor="#da2724" />
            <stop offset="1" stopColor="#e42d27" />
          </linearGradient>
        </defs>
        <path
          fill="url(#followYouTubeGradient)"
          d="M0 0h600v279.93H0z"
          id="background"
        />
        <path
          id="youtube-icon"
          d="M457.86 97.25c-.67-8.8-.91-20.29-4-31.86-5.39-19.89-17.2-29.76-34.25-33.2-11.13-2.25-42.48-2.8-54.29-3.14-25.58-.75-99.91-.9-125.95-.16-25.37.72-44.81 1.53-55 2.72C155.1 35 147.07 57 144.23 73.72c-1.79 10.54-2.63 25.3-2.92 33.86-.38 11.22-.67 57.27.07 67.14s2.6 29.83 4.34 38.44c3.29 16.3 15.85 32 35 34.1 16.88 1.84 42.05 2.84 58.63 3.74 12.78.69 115.76 1 131.46-.3 13.57-1.13 44.5.18 57.28-5.24 13.76-5.83 21-15.88 25.2-28.39 4.09-12.1 3.67-21.23 5-37.12 1.15-13.43 1.07-62.75-.43-82.7zm-190.12 84V91.79l85.12 44.71z"
          transform="translate(0 -.07)"
          fill="#fff"
        />
      </svg>
    );
  }
}

export default FollowYouTube;
