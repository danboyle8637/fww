import React from "react";

const SpotifyIcon = ({ width, height, className }) => {
  return (
    <svg
      id="spotify-logo"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 204 204"
    >
      <circle id="circle" cx="102" cy="102" r="102" fill="#f8f8f8" />
      <path
        id="top-line"
        d="M38 69q67.45-18.16 129 14"
        fill="none"
        stroke="#2ab758"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="20"
      />
      <path
        id="middle-line"
        d="M43.17 102.31q57.85-15.59 110.66 12"
        fill="none"
        stroke="#2ab758"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="16.42"
      />
      <path
        id="bottom-line"
        d="M46.58 133q50.13-13.51 95.87 10.4"
        fill="none"
        stroke="#2ab758"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="14"
      />
    </svg>
  );
};

export default SpotifyIcon;
