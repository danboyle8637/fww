import React, { Component } from "react";

class FollowFacebook extends Component {
  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        id="follow-me-facebook"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 600 280"
      >
        <path fill="#3b5998" d="M0 0h600v280H0z" id="background" />
        <path
          id="facebook-icon"
          d="M382.59 9H217.41A48.41 48.41 0 0 0 169 57.41v165.18A48.41 48.41 0 0 0 217.41 271h88.75V156.59h-15.88v-34.32h16V94.81c0-11.44 5.82-22.36 18.31-28.6 11.44-5.73 52.63 2.28 52.63 2.28V96h-24a8.93 8.93 0 0 0-5.72 2.29c-2.29 2.29-2.29 3.79-2.29 6.86v17.17h32l-5.72 34.32h-26.8V271h37.88A48.41 48.41 0 0 0 431 222.59V57.41A48.41 48.41 0 0 0 382.59 9z"
          fill="#fff"
        />
      </svg>
    );
  }
}

export default FollowFacebook;
