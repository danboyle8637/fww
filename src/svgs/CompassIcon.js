import React from "react";
//import { TweenMax } from "gsap/TweenMax";

import compassIconAni from "../Animations/Tweens/compassIconAni";
import useSVGObserver from "../hooks/useSVGObserver";

const CompassIcon = ({ width, height, className }) => {
  const [setSVGNode, setInnerElement] = useSVGObserver({
    rootMargin: "0px 0px -200px 0px",
    animation: compassIconAni,
  });

  return (
    <svg
      ref={setSVGNode}
      id="compass-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 195 195"
    >
      <defs>
        <linearGradient
          id="compassGradient"
          x1="51.07"
          y1="143.66"
          x2="134.13"
          y2="61.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
      </defs>
      <g id="compass">
        <path
          id="compass-body"
          d="M124.5 28a97.5 97.5 0 1 0 97.5 97.5A97.5 97.5 0 0 0 124.5 28zm0 175.5a78 78 0 1 1 78-78 78 78 0 0 1-78 78z"
          transform="translate(-27 -28)"
          fill="#2b2c3a"
        />
        <path
          id="increment1"
          d="M124.5 57.25l-9.75 68.25 9.75 68.25 9.75-68.25z"
          transform="translate(-27 -28)"
          fill="#2b2c3a"
        />
        <path
          id="increment2"
          d="M76.25 77.25l41.36 55.14 55.14 41.36-41.36-55.14z"
          transform="translate(-27 -28)"
          fill="#2b2c3a"
        />
        <path
          id="increment3"
          d="M56.25 125.5l68.25 9.75 68.25-9.75-68.25-9.75z"
          transform="translate(-27 -28)"
          fill="#2b2c3a"
        />
        <path
          ref={setInnerElement}
          id="main-needle"
          fill="url(#compassGradient)"
          d="M87.16 87.16l-37.92 58.59 58.6-37.91 37.91-58.6-58.59 37.92z"
        />
        <path
          id="middle-dot"
          d="M131.81 125.5a7.31 7.31 0 1 1-7.31-7.31 7.31 7.31 0 0 1 7.31 7.31"
          transform="translate(-27 -28)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default CompassIcon;
