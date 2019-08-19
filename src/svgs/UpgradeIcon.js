import React from "react";

const UpgradeIcon = ({ width, height, className }) => {
  return (
    <svg
      id="upgrade-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 208.76 217"
    >
      <title>Upgrades Icon</title>
      <defs>
        <linearGradient
          id="upgradeArrowGradient1"
          x1="125"
          y1="217.48"
          x2="125"
          y2="110.85"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8b53f6" />
          <stop offset=".72" stopColor="#5afdf2" />
        </linearGradient>
        <linearGradient
          id="upgradeArrowGradient2"
          x1="125.07"
          y1="185.64"
          x2="124.4"
          y2="41.79"
          xlinkHref="#upgradeArrowGradient1"
        />
        <linearGradient
          id="upgradeArrowGradient3"
          x1="125"
          y1="168.13"
          x2="125"
          y2="-40"
          xlinkHref="#upgradeArrowGradient1"
        />
      </defs>
      <path
        id="bottom-arrow"
        d="M132.55 170.33a10.7 10.7 0 0 0-15.1 0L74.8 213a10.65 10.65 0 0 0 15.06 15L125 192.89 160.14 228a10.66 10.66 0 0 0 15.06 0 10.65 10.65 0 0 0 0-15.06z"
        transform="translate(-20.62 -14.16)"
        fill="url(#upgradeArrowGradient1)"
      />
      <path
        id="middle-arrow"
        d="M192.72 159.74l-57.54-57.54a14.42 14.42 0 0 0-20.36 0l-57.54 57.54a14.36 14.36 0 0 0 0 20.31 14.36 14.36 0 0 0 20.31 0L125 132.64l47.41 47.41a14.36 14.36 0 0 0 20.31-20.31z"
        transform="translate(-20.62 -14.16)"
        fill="url(#upgradeArrowGradient2)"
      />
      <path
        id="top-arrow"
        d="M223.28 103.77l-83.51-83.51a20.91 20.91 0 0 0-29.54 0l-83.51 83.5a20.83 20.83 0 0 0 0 29.47 20.85 20.85 0 0 0 29.48 0L125 64.44l68.8 68.8a20.85 20.85 0 0 0 29.48 0 20.83 20.83 0 0 0 0-29.47z"
        transform="translate(-20.62 -14.16)"
        fill="url(#upgradeArrowGradient3)"
      />
    </svg>
  );
};

export default UpgradeIcon;
