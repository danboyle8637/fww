import React from "react";

const CelebrateIcon = ({ width, height, className }) => {
  return (
    <svg
      id="celebrate-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 136.09 189.32"
    >
      <defs>
        <linearGradient
          id="clankGradient1"
          x1="40.58"
          y1="18.59"
          x2="58.32"
          y2="18.59"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
        <linearGradient
          id="clankGradient2"
          x1="65.47"
          y1="13.06"
          x2="74.91"
          y2="13.06"
          xlinkHref="#clankGradient1"
        />
        <linearGradient
          id="clankGradient3"
          x1="75.69"
          y1="23.42"
          x2="94.72"
          y2="23.42"
          xlinkHref="#clankGradient1"
        />
      </defs>
      <g id="left-glass" fill="none" stroke="#2b2c3a">
        <path
          id="left-glass-2"
          data-name="left-glass"
          d="M29.04 127.38c-8.85-2-14.22-13.54-12.2-22.39l18.65-65.47 25.12 5.74-11.68 67.05c-2.02 8.85-11 17.09-19.89 15.07z"
          strokeLinejoin="round"
          strokeWidth="6"
        />
        <path
          id="left-stem"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M28.59 127.56l-10.63 46.52"
        />
        <path
          id="left-base"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M4 170.9l27.91 6.37"
        />
        <path
          id="left-wine"
          d="M23.91 80.26c6.8-.09 4.36 6.94 12.65 9 8.67 2.19 9.64-9.07 17.17-4.52"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
      </g>
      <g id="right-glass" fill="none" stroke="#2b2c3a">
        <path
          id="right-glass-2"
          data-name="right-glass"
          d="M104.68 135.09c-8.68 2.68-19.09-4.6-21.77-13.28l-16.63-66 24.62-7.6 23.43 63.91c2.71 8.68-.98 20.29-9.65 22.97z"
          strokeLinejoin="round"
          strokeWidth="6"
        />
        <path
          id="right-stem"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M104.34 135.5l14.07 45.6"
        />
        <path
          id="right-base"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="8"
          d="M104.73 185.32l27.36-8.44"
        />
        <path
          id="right-wine"
          d="M76.63 96.88c5.85-3.48 7.25 3.82 15.47 1.49 8.61-2.44 3.81-12.67 12.61-12.5"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
      </g>
      <path
        id="left-clang"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
        stroke="url(#clankGradient1)"
        d="M44.08 10.83l10.74 15.52"
      />
      <path
        id="middle-clang"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
        stroke="url(#clankGradient2)"
        d="M71.41 3.5l-2.44 19.12"
      />
      <path
        id="right-clang"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
        stroke="url(#clankGradient3)"
        d="M91.22 15.88L79.19 30.95"
      />
    </svg>
  );
};

export default CelebrateIcon;
