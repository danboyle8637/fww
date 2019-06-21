import React, { Component } from "react";

class FollowPodcast extends Component {
  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        id="follow-me-podcast"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 600 280"
      >
        <defs>
          <linearGradient
            id="followPodcastGradient"
            x1="99.73"
            y1="297.68"
            x2="507.1"
            y2="-23.06"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#842bc1" />
            <stop offset=".65" stopColor="#bd59ea" />
            <stop offset="1" stopColor="#d66dfd" />
          </linearGradient>
        </defs>
        <path
          fill="url(#followPodcastGradient)"
          d="M0 0h600v280H0z"
          id="background"
        />
        <g id="podcast-icon" fill="#fff">
          <circle id="head" cx="299.86" cy="116.32" r="26.96" />
          <path
            id="body"
            d="M303.48 267h-5.09c-14.51-1.05-17.17-3.95-18-14l-7.76-76.26c0-14.16 11.59-20.41 25.75-20.41h2.41c14.16 0 25.74 6.25 25.74 20.41l-8.11 77.95c-2.26 9.86-1.42 10.54-14.94 12.31z"
          />
          <path
            id="outter-circle"
            d="M415 127.26A115 115 0 0 1 331 238l2.51-19.43a97.27 97.27 0 1 0-66.21.26l2.43 19.33A115 115 0 1 1 415 127.26z"
          />
          <path
            id="inner-circle"
            d="M371.44 121.87a71.41 71.41 0 0 1-33.26 60.4l1.53-11.91a19.92 19.92 0 0 0-2.44-9.88 53.71 53.71 0 1 0-74 .66 20.17 20.17 0 0 0-2.09 9.22l1.58 12.55a71.49 71.49 0 1 1 108.68-61z"
          />
        </g>
      </svg>
    );
  }
}

export default FollowPodcast;
