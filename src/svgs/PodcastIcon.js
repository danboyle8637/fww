import React, { useEffect, useRef, useState } from "react";

import footerIconAni from "../Animations/Tweens/footerIconAni";

const PodcastIcon = ({ width, height, className, fill, stroke }) => {
  const [isClicked, setIsClicked] = useState(false);
  const podcastIconRef = useRef(null);
  const podcastPathRef = useRef(null);

  useEffect(() => {
    const podcastIcon = podcastIconRef.current;
    const podcastPath = podcastPathRef.current;

    footerIconAni(podcastIcon, podcastPath, isClicked, isClickedFalse, false);

    return () => {
      footerIconAni(podcastIcon, podcastPath, isClicked, isClickedFalse, true);
    };
  }, [isClicked]);

  const isClickedFalse = () => {
    setIsClicked(false);
  };

  const handleIconClicked = () => {
    setIsClicked(true);
  };

  return (
    <svg
      ref={podcastIconRef}
      onClick={handleIconClicked}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 178.42 216.87"
    >
      <title>Podcast Icon</title>
      <g id="podcast-icon" fill={fill || "#5afdf2"}>
        <circle id="head" cx="89.21" cy="88.32" r="23" />
        <path
          id="body"
          d="M116.45 234.89h-4.34C99.73 234 97.46 231.54 96.76 223l-6.61-65.07c0-12.08 9.88-17.4 22-17.4h2.06c12.08 0 22 5.32 22 17.4l-6.92 66.51c-2.02 8.38-1.29 8.96-12.84 10.45z"
          transform="translate(-23.93 -18.04)"
        />
      </g>
      <g
        id="podcast-rings"
        data-name="podcast-rings"
        fill="none"
        stroke={stroke || "#5afdf2"}
        strokeLinecap="round"
        strokeMiterlimit="10"
      >
        <path
          ref={podcastPathRef}
          d="M48.56 161.83a83.14 83.14 0 1 1 81 .16"
          strokeWidth="12"
        />
        <path d="M42.42 113.58a52.18 52.18 0 1 1 93.09-1.56" strokeWidth="16" />
      </g>
    </svg>
  );
};

export default PodcastIcon;
