import React, { useEffect, useRef, useState } from "react";

import footerIconAni from "../Animations/Tweens/footerIconAni";

const FacebookIcon = ({ width, height, className }) => {
  const [isClicked, setIsClicked] = useState(false);
  const facebookIconRef = useRef(null);
  const facebookPathRef = useRef(null);

  useEffect(() => {
    const facebookIcon = facebookIconRef.current;
    const facebookPath = facebookPathRef.current;

    footerIconAni(facebookIcon, facebookPath, isClicked, isClickedFalse, false);

    return () => {
      footerIconAni(
        facebookIcon,
        facebookPath,
        isClicked,
        isClickedFalse,
        true
      );
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
      ref={facebookIconRef}
      onClick={handleIconClicked}
      id="facebook-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 222 222"
    >
      <title>Facebook Icon</title>
      <path
        ref={facebookPathRef}
        id="icon"
        d="M177.2 6H44.8A38.8 38.8 0 0 0 6 44.8v132.4A38.8 38.8 0 0 0 44.8 216h71.14v-91.7h-12.73V96.79H116v-22c0-9.17 4.66-17.92 14.68-22.93 9.17-4.58 42.18 1.84 42.18 1.84v22h-19.22a7.13 7.13 0 0 0-4.58 1.84c-1.84 1.83-1.84 3-1.84 5.5v13.75h25.68l-4.59 27.51h-21.48V216h30.37a38.8 38.8 0 0 0 38.8-38.8V44.8A38.8 38.8 0 0 0 177.2 6z"
        fill="none"
        stroke="#5afdf2"
        strokeMiterlimit="10"
        strokeWidth="12"
      />
    </svg>
  );
};

export default FacebookIcon;
