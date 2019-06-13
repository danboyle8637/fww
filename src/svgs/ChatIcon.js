import React from "react";

const ChatIcon = ({ width, height, className }) => {
  return (
    <svg
      id="chat-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 197.48 148.21"
    >
      <defs>
        <linearGradient
          id="chatDotGradient"
          x1="39.23"
          y1="51.36"
          x2="55.27"
          y2="59.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="66.84"
          y1="51.28"
          x2="82.75"
          y2="59.69"
          xlinkHref="#chatDotGradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="94.22"
          y1="51.36"
          x2="110.27"
          y2="59.53"
          xlinkHref="#chatDotGradient"
        />
      </defs>
      <path
        id="back-bubble"
        d="M65.27 107.58c9.56 18.35 31.25 31.17 56.49 31.17a71 71 0 0 0 25.7-4.75c6.33 5 19.35 12.36 39.26 9.61a67.38 67.38 0 0 1-11.45-10.34 48.87 48.87 0 0 1-7.38-12.06c9.68-9.21 15.57-21.34 15.57-34.63 0-25.8-22.15-47.21-51.25-51.41"
        fill="none"
        stroke="#2b2c3a"
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <path
        id="front-bubble"
        d="M75.73 4C41.65 4 14.02 27.36 14.02 56.17c0 13.29 5.89 25.42 15.57 34.63a48.87 48.87 0 0 1-7.38 12.06 67 67 0 0 1-11.44 10.34c19.9 2.75 32.93-4.59 39.25-9.61a71 71 0 0 0 25.71 4.75c34.07 0 61.7-23.36 61.7-52.17S109.8 4 75.73 4z"
        fill="none"
        stroke="#2b2c3a"
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <circle
        id="left-dot"
        cx="46.37"
        cy="55"
        r="9"
        fill="url(#linear-gradient)"
      />
      <circle
        id="middle-dot"
        cx="73.87"
        cy="55"
        r="9"
        fill="url(#linear-gradient-2)"
      />
      <circle
        id="right-dot"
        cx="101.37"
        cy="55"
        r="9"
        fill="url(#linear-gradient-3)"
      />
    </svg>
  );
};

export default ChatIcon;
