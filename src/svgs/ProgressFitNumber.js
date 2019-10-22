import React, { useEffect, useRef } from "react";
import TimelineMax from "gsap/TimelineMax";
import { Linear } from "gsap/TweenMax";
import DrawSVG from "../greensock/DrawSVGPlugin";

import useSVGObserver from "../hooks/useSVGObserver";

const ProgressFitNumber = ({
  width,
  height,
  className,
  gradientId,
  fitNumber,
  setNumber,
}) => {
  const numberLoaderRef = useRef(null);
  const [setSVGNode, runAnimation] = useSVGObserver({
    rootMargin: "0px 0px -100px 0px",
    shouldUnobserve: true,
  });

  useEffect(() => {
    const numberLoader = numberLoaderRef.current;
    // eslint-disable-next-line
    const drawSVG = DrawSVG;
    const tl = new TimelineMax({ paused: false });

    // This is the length of the path in the SVG
    const maxLength = DrawSVG.getLength(numberLoader);

    if (runAnimation) {
      tl.to(numberLoader, 4, {
        drawSVG: `${fitNumber * 10}%`,
        ease: Linear.easeNone,
        onUpdate: () => {
          const position = DrawSVG.getPosition(numberLoader)[1];
          const percentage = Math.round(((position / maxLength) * 100) / 10);
          setNumber(percentage);
        },
      });
    } else {
      tl.to(numberLoader, 4, {
        drawSVG: "0%",
        ease: Linear.easeNone,
      });
    }

    return () => {
      tl.kill(null, numberLoader);
    };
  }, [runAnimation, fitNumber]);

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
