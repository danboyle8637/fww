import React from "react";

const SpoonForkKnifeIcon = ({ width, height, className }) => {
  return (
    <svg
      id="spoon-fork-knife-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 154.1 214.96"
    >
      <defs>
        <linearGradient
          id="spoonGradient"
          x1="30.03"
          y1="83.75"
          x2="122.36"
          y2="193.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
      </defs>
      <path
        d="M76.06 59.87c3.7 0 8.12 3.6 11.82 9.63a48.31 48.31 0 0 1 6.83 23.82c0 13.11-7.29 15.85-9.69 16.75l-6.13 2.31v105.13h-6.52V112.29l-5.84-2.42c-2.25-.94-9.11-3.78-9.11-16.55a48.31 48.31 0 0 1 6.83-23.82c3.7-6 8.12-9.63 11.81-9.63m0-9.46C60.54 50.41 48 73.82 48 93.32c0 13.53 6.06 21.6 14.95 25.29v99.66a8.71 8.71 0 0 0 8.71 8.7h8a8.71 8.71 0 0 0 8.71-8.7v-99.34c9.36-3.51 15.83-11.65 15.83-25.61 0-19.5-12.59-42.91-28.12-42.91z"
        transform="translate(-47.95 -12.01)"
        fill="url(#spoonGradient)"
        id="spoon"
      />
      <path
        id="fork"
        d="M149.92 60.59v37.69a3.31 3.31 0 0 1-2.69 3.34 3.15 3.15 0 0 1-3.61-3.11V55.16a3.73 3.73 0 0 0-2.36-3.51 19 19 0 0 0-4-1v47.64a3.32 3.32 0 0 1-2.69 3.37 3.16 3.16 0 0 1-3.61-3.12V50.76v-.08a19.18 19.18 0 0 0-4.07 1.08 3.72 3.72 0 0 0-2.32 3.5v43a3.33 3.33 0 0 1-2.7 3.37 3.15 3.15 0 0 1-3.6-3.12V61a1 1 0 0 0-1.74-.54c-4.3 6.37-6.53 15.33-6.53 25.25 0 13.24 4 24.76 11.47 30.8a.13.13 0 0 1 0 .07v101.69a8.71 8.71 0 0 0 8.71 8.7h8a8.71 8.71 0 0 0 8.71-8.7V116.62a.09.09 0 0 1 0-.07c7.45-6 11.47-17.58 11.47-30.84 0-10.12-2.35-19.23-6.78-25.66a.94.94 0 0 0-1.66.54z"
        transform="translate(-47.95 -12.01)"
        fill="#2b2c3a"
      />
      <path
        id="knife"
        d="M189.32 12.13c-15.06 4.5-25.95 28.09-25.95 58.15 0 18.11 6.34 32.8 13.23 41.63v106.36a8.71 8.71 0 0 0 8.71 8.7h8a8.71 8.71 0 0 0 8.71-8.7v-120c.03-30.11-2.22-89.27-12.7-86.14z"
        transform="translate(-47.95 -12.01)"
        fill="#2b2c3a"
      />
    </svg>
  );
};

export default SpoonForkKnifeIcon;
