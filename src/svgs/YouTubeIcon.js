import React, { useEffect, useRef, useState } from "react";

import footerIconAni from "../Animations/Tweens/footerIconAni";

const YouTubeIcon = ({ width, height, className }) => {
  const [isClicked, setIsClicked] = useState(false);
  const youTubeIconRef = useRef(null);
  const youTubePathRef = useRef(null);

  useEffect(() => {
    const youTubeIcon = youTubeIconRef.current;
    const youTubePath = youTubePathRef.current;

    footerIconAni(youTubeIcon, youTubePath, isClicked, isClickedFalse, false);

    return () => {
      footerIconAni(youTubeIcon, youTubePath, isClicked, isClickedFalse, true);
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
      ref={youTubeIconRef}
      onClick={handleIconClicked}
      id="youtube-logo"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 218.74 150.5"
    >
      <rect
        id="background"
        width="218.74"
        height="150.5"
        rx="29.93"
        fill="#5afdf2"
      />
      <path
        ref={youTubePathRef}
        id="play-button"
        d="M86.21 41.45v62.01l59.72-31.01-59.72-31z"
      />
    </svg>
  );
};

export default YouTubeIcon;
