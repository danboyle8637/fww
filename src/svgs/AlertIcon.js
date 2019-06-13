import React from "react";

const AlertIcon = ({ width, height, className }) => {
  return (
    <svg
      id="alert-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 184.03 162.89"
    >
      <defs>
        <linearGradient
          id="alertPointGradient"
          x1="100.52"
          y1="81.26"
          x2="100.98"
          y2="140.93"
          gradientTransform="translate(-1 -2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
      </defs>
      <path
        id="outline"
        d="M86.82 10.16L7.98 146.73a6 6 0 0 0 5.2 9h157.68a6 6 0 0 0 5.2-9L97.22 10.16a6 6 0 0 0-10.4 0z"
        fill="none"
        stroke="#2b2c3a"
        strokeMiterlimit="10"
        strokeWidth="14.31"
      />
      <path
        d="M89.15 147.68c0-5.78 4.54-10.09 10.89-10.09s10.88 4.31 10.88 10.09S106.39 158 100 158s-10.85-4.65-10.85-10.32zm2.83-70h16.11a2.32 2.32 0 0 1 2.32 2.48l-3.2 47.16a2.33 2.33 0 0 1-2.32 2.18h-9.71a2.33 2.33 0 0 1-2.32-2.18l-3.2-47.12A2.33 2.33 0 0 1 92 77.72z"
        transform="translate(-8.02 -18.16)"
        fill="url(#alertPointGradient)"
        id="warning-point"
      />
    </svg>
  );
};

export default AlertIcon;
