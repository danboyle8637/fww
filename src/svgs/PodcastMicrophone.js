import React from "react";

const PodcastMicrophone = ({ width, height, className }) => {
  return (
    <svg
      id="podcast-microphone-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 276.5 432.5"
    >
      <g id="mic-head" fill="none" stroke="#2b2c3a" strokeMiterlimit="10">
        <rect
          id="microphone-head"
          x="56.5"
          y="10.5"
          width="163"
          height="294"
          rx="76.19"
          strokeWidth="21"
        />
        <path
          id="top-left-line"
          strokeLinecap="round"
          strokeWidth="20.18"
          d="M60.5 114H115"
        />
        <path
          id="middle-left-line"
          strokeLinecap="round"
          strokeWidth="20.18"
          d="M60.5 157H115"
        />
        <path
          id="bottom-left-line"
          strokeLinecap="round"
          strokeWidth="20.18"
          d="M60.5 200H115"
        />
        <path
          id="top-right-line"
          strokeLinecap="round"
          strokeWidth="20.18"
          d="M161 114h54.5"
        />
        <path
          id="middle-right-line"
          strokeLinecap="round"
          strokeWidth="20.18"
          d="M161 157h54.5"
        />
        <path
          id="bottom-right-line"
          strokeLinecap="round"
          strokeWidth="20.18"
          d="M161 200h54.5"
        />
      </g>
      <path
        id="stand-curve"
        d="M263 221.75a124.75 124.75 0 0 1-249.5 0"
        fill="none"
        stroke="#2b2c3a"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="27"
      />
      <path
        id="stand"
        fill="none"
        stroke="#2b2c3a"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="27"
        d="M138 346v73"
      />
      <path
        id="stand-base"
        fill="none"
        stroke="#2b2c3a"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="27"
        d="M52 419h172"
      />
    </svg>
  );
};

export default PodcastMicrophone;
