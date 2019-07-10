import React from "react";

const WorkoutCheckmark = ({ width, height, className }) => {
  return (
    <svg
      id="workout-check-circle"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 241 241"
    >
      <path
        d="M125.38 25.87a100.5 100.5 0 1 1-100.5 100.5 100.51 100.51 0 0 1 100.5-100.5m0-20a120.51 120.51 0 0 0-85.21 205.71A120.5 120.5 0 0 0 210.59 41.17a119.72 119.72 0 0 0-85.21-35.3z"
        transform="translate(-4.88 -5.87)"
        fill="#545885"
        id="check-circle-border"
      />
      <circle
        id="check-circle-fill"
        cx="120.5"
        cy="120.5"
        r="100.5"
        fill="#5AFDF2"
      />
      <path
        id="check"
        fill="none"
        stroke="#19191c"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="27.32"
        d="M174.55 81.86l-77.27 77.28-30.83-30.84"
      />
    </svg>
  );
};

export default WorkoutCheckmark;
