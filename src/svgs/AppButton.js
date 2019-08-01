import React from "react";

const AppButton = ({ width, height, className }) => {
  return (
    <svg
      id="app-button"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 433.96 433.96"
    >
      <defs>
        <linearGradient
          id="appButtonGradient"
          x1="146.04"
          y1="173.08"
          x2="426.04"
          y2="173.08"
          gradientTransform="matrix(.82 0 0 1 27.67 20.55)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8b53f6" />
          <stop offset=".72" stopColor="#5afdf2" />
        </linearGradient>
        <linearGradient
          id="appButtonGradient2"
          x1="136.44"
          y1="219.45"
          x2="416.44"
          y2="219.45"
          gradientTransform="matrix(.82 0 0 1 35.56 94.49)"
          xlinkHref="#appButtonGradient"
        />
      </defs>
      <circle
        id="button-bg"
        cx="216.98"
        cy="216.98"
        r="216.98"
        fill="#2b2c3a"
      />
      <rect
        id="top-arrow"
        x="147.63"
        y="163.63"
        width="230"
        height="60"
        rx="30"
        transform="rotate(45 285.973 137.264)"
        fill="url(#appButtonGradient)"
      />
      <rect
        id="bottom-arrow"
        x="147.64"
        y="283.94"
        width="230"
        height="60"
        rx="30"
        transform="rotate(-45 206.279 337.287)"
        fill="url(#appButtonGradient2)"
      />
    </svg>
  );
};

export default AppButton;
