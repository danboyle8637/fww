import React from "react";

const BlogShamelessPlugIcon = ({ width, height, className }) => {
  return (
    <svg
      id="shameless-plug-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 151.97 176.5"
    >
      <title>Shameless Plug Icon</title>
      <defs>
        <linearGradient
          id="shamelessPlugGradient"
          x1="14.37"
          y1="89.18"
          x2="62"
          y2="89.18"
          gradientTransform="translate(14.56 44.56)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
      </defs>
      <path
        id="butt"
        d="M52.11 107.74h24.45v52H52.11a23.18 23.18 0 0 1-23.18-23.18v-5.64a23.18 23.18 0 0 1 23.18-23.18z"
        transform="rotate(-45 27.897 156.145)"
        stroke="#2b2c3a"
        strokeMiterlimit="10"
        strokeWidth="8"
        fill="url(#shamelessPlugGradient)"
      />
      <path
        id="horn"
        d="M28.08 87.51s9.43-8.24 15.69-28.44 7.63-29.42 7.63-29.42l71.31 71.34s-12.48 1.69-30.83 7.79c-18.12 6-27 15.54-27 15.54z"
        fill="none"
        stroke="#2b2c3a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <rect
        id="horn-rim"
        x="108.05"
        y="11.17"
        width="14.53"
        height="120.01"
        rx="7.27"
        strokeWidth="8"
        fill="none"
        stroke="#2b2c3a"
        strokeMiterlimit="10"
        transform="rotate(-45 90.453 93.583)"
      />
      <path
        id="horn-blaster"
        d="M83.43 42.84a18.45 18.45 0 1 1 26.09 26.09"
        fill="none"
        stroke="#2b2c3a"
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <path
        id="handle"
        d="M78.03 172.5s-1.93-6.84-10.86-18.8c-6-8.07-18.21-13.54-18.21-13.54l15.92-15.88s9.22 8.79 19.25 13.89c10.28 5.22 19.5 8.76 19.5 8.76z"
        fill="none"
        stroke="#2b2c3a"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        id="noise-top"
        fill="none"
        stroke="#2b2c3a"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M99.39 24.71L102.98 4"
      />
      <path
        id="noise-middle"
        fill="none"
        stroke="#2b2c3a"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M118.5 33.85l14.32-14.33"
      />
      <path
        id="noise-bottom"
        fill="none"
        stroke="#2b2c3a"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="8"
        d="M127.58 52.58L147.97 49"
      />
    </svg>
  );
};

export default BlogShamelessPlugIcon;
