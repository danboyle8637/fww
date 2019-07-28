import React from "react";

const WorkoutTimerIcon = ({ width, height, className }) => {
  return (
    <svg
      id="workout-timer-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 242 242"
    >
      <path
        id="longer-workout"
        d="M121.03 39a82 82 0 1 1-.07 0"
        fill="#19191C"
        stroke="#b44cff"
        strokeMiterlimit="10"
        strokeWidth="64.95"
      />
      <path
        id="shorter-workout"
        d="M121.03 39a82 82 0 1 1-.07 0"
        fill="#19191C"
        stroke="#5afdf2"
        strokeMiterlimit="10"
        strokeWidth="64.95"
      />
      <path
        d="M125.64 25.83a101 101 0 1 1-101 101 101 101 0 0 1 101-101m0-20a121 121 0 0 0-85.56 206.56A121 121 0 0 0 211.2 41.27a120.19 120.19 0 0 0-85.56-35.44z"
        transform="translate(-4.64 -5.83)"
        fill="#101010"
        id="outter-ring"
      />
      <text
        transform="translate(102.94 45.05)"
        fontSize="28.49"
        fill="#101010"
        fontFamily="Eurostile-Hea, Eurostile"
      >
        12
      </text>
      <text
        transform="translate(111.97 217.05)"
        fontSize="28.49"
        fill="#101010"
        fontFamily="Eurostile-Hea, Eurostile"
      >
        6
      </text>
      <text
        transform="translate(199.91 129.31)"
        fontSize="28.49"
        fill="#101010"
        fontFamily="Eurostile-Hea, Eurostile"
      >
        3
      </text>
      <text
        transform="translate(24.91 129.31)"
        fontSize="28.49"
        fill="#101010"
        fontFamily="Eurostile-Hea, Eurostile"
      >
        9
      </text>
    </svg>
  );
};

export default WorkoutTimerIcon;
