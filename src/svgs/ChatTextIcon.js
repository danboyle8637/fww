import React from "react";

const ChatTextIcon = ({ width, height, className }) => {
  return (
    <svg
      id="chat-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 286.53 177.64"
    >
      <path
        id="word-bubble"
        d="M226 38.36H74.5A67.5 67.5 0 0 0 7 105.86v12.64A67.5 67.5 0 0 0 74.5 186h126.34C212 204 256 216 256 216c-12.24-7.34-14.35-24.67-10.12-33a67.53 67.53 0 0 0 47.65-64.53v-12.61A67.5 67.5 0 0 0 226 38.36z"
        transform="translate(-7 -38.36)"
        fill="#212126"
      />
      <circle id="dot1" cx="63" cy="75.64" r="27" fill="#282830" />
      <circle id="dot2" cx="143" cy="75.64" r="27" fill="#282830" />
      <circle id="dot3" cx="223" cy="75.64" r="27" fill="#282830" />
    </svg>
  );
};

export default ChatTextIcon;
