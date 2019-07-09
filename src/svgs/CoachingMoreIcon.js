import React from "react";

const CoachingMoreIcon = ({ width, height, className }) => {
  return (
    <svg
      id="coaching-more-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 194 194"
    >
      <defs>
        <linearGradient
          id="coachingMoreIconGradient1"
          x1="59.68"
          y1="134.61"
          x2="90.32"
          y2="108.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
        <linearGradient
          id="coachingMoreIconGradient2"
          x1="107.68"
          y1="134.61"
          x2="138.32"
          y2="108.89"
          xlinkHref="#coachingMoreIconGradient1"
        />
        <linearGradient
          id="coachingMoreIconGradient3"
          x1="155.68"
          y1="134.61"
          x2="186.32"
          y2="108.89"
          xlinkHref="#coachingMoreIconGradient1"
        />
        <linearGradient
          id="coachingMoreIconGradient4"
          x1="29.31"
          y1="200.37"
          x2="216.69"
          y2="43.13"
          xlinkHref="#coachingMoreIconGradient1"
        />
      </defs>
      <g id="dots">
        <path
          d="M75 109.75a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0-8a20 20 0 1 0 20 20 20 20 0 0 0-20-20z"
          transform="translate(-26 -24.75)"
          fill="url(#coachingMoreIconGradient1)"
          id="left-dot"
        />
        <path
          d="M123 109.75a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0-8a20 20 0 1 0 20 20 20 20 0 0 0-20-20z"
          transform="translate(-26 -24.75)"
          fill="url(#coachingMoreIconGradient2)"
          id="middle-dot"
        />
        <path
          d="M171 109.75a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0-8a20 20 0 1 0 20 20 20 20 0 0 0-20-20z"
          transform="translate(-26 -24.75)"
          fill="url(#coachingMoreIconGradient3)"
          id="right-dot"
        />
      </g>
      <path
        d="M185 40.75a19 19 0 0 1 19 19v124a19 19 0 0 1-19 19H61a19 19 0 0 1-19-19v-124a19 19 0 0 1 19-19h124m0-16H61a35.1 35.1 0 0 0-35 35v124a35.1 35.1 0 0 0 35 35h124a35.1 35.1 0 0 0 35-35v-124a35.1 35.1 0 0 0-35-35z"
        transform="translate(-26 -24.75)"
        fill="url(#coachingMoreIconGradient4)"
        id="box"
      />
    </svg>
  );
};

export default CoachingMoreIcon;
