import React, { useEffect, useRef } from "react";
import TimelineMax from "gsap/TimelineMax";
import { TweenMax, Linear } from "gsap/TweenMax";
import DrawSVG from "../greensock/DrawSVGPlugin";

import useSVGObserver from "../hooks/useSVGObserver";

const ProgressLoader = ({
  width,
  height,
  className,
  gradientId,
  setPercentComplete,
}) => {
  const loaderBarRef = useRef(null);
  const [setSVGNode, runAnimation] = useSVGObserver({
    rootMargin: "0px 0px -100px 0px",
    shouldUnobserve: true,
  });

  useEffect(() => {
    const loaderBar = loaderBarRef.current;
    // eslint-disable-next-line
    const drawSVG = DrawSVG;

    TweenMax.set(loaderBar, { drawSVG: "0%" });

    // This is the length of the path in the SVG
    const maxLength = DrawSVG.getLength(loaderBar);

    const tl = new TimelineMax({ paused: false });

    if (runAnimation) {
      tl.to(loaderBar, 4, {
        drawSVG: "100%",
        ease: Linear.easeNone,
        onUpdate: () => {
          const position = DrawSVG.getPosition(loaderBar)[1];
          const percentage = Math.round((position / maxLength) * 100);
          setPercentComplete(percentage);
        },
      });
    }

    return () => {
      tl.kill(null, loaderBar);
    };
  }, [runAnimation, setPercentComplete]);

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
      <title>Progress Loader</title>
      <defs>
        <linearGradient
          id={`progressLoaderGradient${gradientId}`}
          x1="17"
          y1="99.5"
          x2="182"
          y2="99.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b44cff" />
          <stop offset=".45" stopColor="#88a2f9" />
          <stop offset=".83" stopColor="#67e4f4" />
          <stop offset="1" stopColor="#5afdf2" />
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
        ref={loaderBarRef}
        id="progress"
        d="M100.08 30a69.47 69.47 0 1 1-1.23 0"
        transform="translate(-14 -14)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="26"
        stroke={`url(#progressLoaderGradient${gradientId})`}
      />
    </svg>
  );
};

export default ProgressLoader;
