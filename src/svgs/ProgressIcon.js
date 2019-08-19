import React, { useEffect, useRef } from "react";
import TimelineMax from "gsap/TimelineMax";
import { Power4 } from "gsap/TweenMax";
import DrawSVG from "../greensock/DrawSVGPlugin";

import useSVGObserver from "../hooks/useSVGObserver";

const ProgressIcon = ({
  width,
  height,
  className,
  gradientId = "progressIconGradient",
}) => {
  const progressBarRef = useRef(null);
  const [setSVGNode, runAnimation] = useSVGObserver({
    rootMargin: "-200px 0px -200px 0px",
  });

  useEffect(() => {
    const progressBar = progressBarRef.current;
    // eslint-disable-next-line
    const drawSVG = DrawSVG;
    const tl = new TimelineMax({ paused: false });

    if (runAnimation) {
      tl.to(progressBar, 4, {
        drawSVG: "100%",
        ease: Power4.easeOut,
      });
    } else {
      tl.to(progressBar, 4, {
        drawSVG: "0%",
        ease: Power4.easeOut,
      });
    }

    return () => {
      tl.kill(null, progressBar);
    };
  }, [runAnimation]);

  return (
    <svg
      ref={setSVGNode}
      id="progress-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 219.2 219.2"
    >
      <title>Progress Icon</title>
      <defs>
        <linearGradient
          id={gradientId}
          x1="15.9"
          y1="125.5"
          x2="235.1"
          y2="125.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b44cff" />
          <stop offset=".45" stopColor="#88a2f9" />
          <stop offset=".83" stopColor="#67e4f4" />
          <stop offset="1" stopColor="#5afdf2" />
        </linearGradient>
      </defs>
      <circle
        id="loader-background"
        cx="109.6"
        cy="109.6"
        r="92.5"
        fill="none"
        stroke="#101010"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="34.2"
      />
      <path
        ref={progressBarRef}
        id="loader-path"
        d="M125.5 33A92.5 92.5 0 1 1 33 125.5"
        transform="translate(-15.9 -15.9)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="34.2"
        stroke={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default ProgressIcon;
