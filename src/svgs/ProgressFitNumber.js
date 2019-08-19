import React, { useEffect, useRef } from "react";
import TimelineMax from "gsap/TimelineMax";
import { Power4 } from "gsap/TweenMax";
import DrawSVG from "../greensock/DrawSVGPlugin";

import useSVGObserver from "../hooks/useSVGObserver";

const ProgressFitNumber = ({
  width,
  height,
  className,
  gradientId,
  fitNumber,
}) => {
  const numberLoaderRef = useRef(null);
  const [setSVGNode, runAnimation] = useSVGObserver({
    rootMargin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    const numberLoader = numberLoaderRef.current;
    // eslint-disable-next-line
    const drawSVG = DrawSVG;
    const tl = new TimelineMax({ paused: false });

    if (runAnimation) {
      tl.to(numberLoader, 4, {
        drawSVG: `${fitNumber * 10}%`,
        ease: Power4.easeOut,
      });
    } else {
      tl.to(numberLoader, 4, {
        drawSVG: "0%",
        ease: Power4.easeOut,
      });
    }

    return () => {
      tl.kill(null, numberLoader);
    };
  }, [runAnimation]);

  return (
    <svg
      ref={setSVGNode}
      id="progress-loader"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 171 171"
    >
      <title>Fitness Number Loader</title>
      <defs>
        <linearGradient
          id={`fitNumberGradient${gradientId}`}
          x1="17"
          y1="99.5"
          x2="182"
          y2="99.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b3b6e1" />
          <stop offset=".08" stopColor="#afade3" />
          <stop offset=".71" stopColor="#956cf1" />
          <stop offset="1" stopColor="#8b53f6" />
        </linearGradient>
      </defs>
      <circle
        id="progress-background"
        cx="85.5"
        cy="85.5"
        r="69.5"
        fill="none"
        stroke="#0e0e0f"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="32"
      />
      <path
        ref={numberLoaderRef}
        id="progress"
        d="M100.08 30a69.47 69.47 0 1 1-1.23 0"
        transform="translate(-14 -14)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="26"
        stroke={`url(#fitNumberGradient${gradientId})`}
      />
    </svg>
  );
};

export default ProgressFitNumber;
