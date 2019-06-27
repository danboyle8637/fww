import React from "react";

const WorkoutCheckmark = ({ width, height, className }) => {
  return (
    <svg
      id="workout-clock"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 213 213"
    >
      <circle
        id="check-circle"
        cx="106.5"
        cy="106.5"
        r="100.5"
        fill="#8b53f6"
        stroke="#545885"
        strokeMiterlimit="10"
        strokeWidth="12"
      />
      <path
        id="check"
        fill="none"
        stroke="#19191c"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="20.69"
        d="M147.43 77.25l-58.51 58.5-23.35-23.34"
      />
    </svg>
  );
};

export default WorkoutCheckmark;
