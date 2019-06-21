import React, { Component } from "react";

class FollowInstagram extends Component {
  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        id="instagram-follow-me"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 600.01 280"
      >
        <defs>
          <linearGradient
            id="followInstagramGradient"
            x1="17.55"
            y1="302.03"
            x2="588.83"
            y2="-25.69"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".07" stopColor="#fecb55" />
            <stop offset=".15" stopColor="#fbb760" />
            <stop offset=".3" stopColor="#f4827b" />
            <stop offset=".51" stopColor="#e92fa7" />
            <stop offset=".55" stopColor="#e61bb2" />
            <stop offset=".6" stopColor="#e01cb3" />
            <stop offset=".66" stopColor="#cf1fb7" />
            <stop offset=".73" stopColor="#b224bd" />
            <stop offset=".8" stopColor="#8b2ac5" />
            <stop offset=".88" stopColor="#5832d0" />
            <stop offset=".97" stopColor="#1b3ddd" />
            <stop offset="1" stopColor="#0041e3" />
          </linearGradient>
        </defs>
        <path
          fill="url(#followInstagramGradient)"
          d="M0 0h600.01v280H0z"
          id="background"
        />
        <path
          id="instagram-icon"
          d="M378.77 15H250.23A63.23 63.23 0 0 0 187 78.23v128.54A63.23 63.23 0 0 0 250.23 270h128.54A63.23 63.23 0 0 0 442 206.77V78.23A63.23 63.23 0 0 0 378.77 15zm-63.64 186.83a58.7 58.7 0 1 1 58.7-58.7 58.7 58.7 0 0 1-58.7 58.7zM387.4 86.32A17.36 17.36 0 1 1 404.76 69a17.36 17.36 0 0 1-17.36 17.32z"
          transform="translate(.01)"
          fill="#f8f8f8"
        />
      </svg>
    );
  }
}

export default FollowInstagram;
