import React from "react";

const MoreIcon = ({ width, height, className }) => {
  return (
    <svg
      id="more-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 184.5 52"
    >
      <path
        fill="none"
        stroke="#19191c"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="11"
        d="M138 5.5l41 41"
        id="left-cross"
      />
      <path
        fill="none"
        stroke="#19191c"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="11"
        d="M138 46.5l41-41"
        id="right-cross"
      />
      <path
        d="M32.36 24A15.36 15.36 0 1 1 17 39.36 15.38 15.38 0 0 1 32.36 24m0-9a24.36 24.36 0 1 0 24.36 24.36A24.36 24.36 0 0 0 32.36 15z"
        transform="translate(-8 -13.5)"
        fill="#19191c"
        id="left-ring"
      />
      <path
        d="M99.5 24a15.36 15.36 0 1 1-15.36 15.36A15.38 15.38 0 0 1 99.5 24m0-9a24.36 24.36 0 1 0 24.36 24.36A24.36 24.36 0 0 0 99.5 15z"
        transform="translate(-8 -13.5)"
        fill="#19191c"
        id="middle-ring"
      />
      <path
        d="M166.64 24a15.36 15.36 0 1 1-15.36 15.36A15.38 15.38 0 0 1 166.64 24m0-9A24.36 24.36 0 1 0 191 39.36 24.36 24.36 0 0 0 166.64 15z"
        transform="translate(-8 -13.5)"
        fill="#19191c"
        id="right-ring"
      />
    </svg>
  );
};

export default MoreIcon;
