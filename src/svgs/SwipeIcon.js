import React, { useEffect, useRef } from "react";
import { TimelineMax } from "gsap/TimelineMax";

import handSwipeAni from "../Animations/Tweens/handSwipeAni";

const SwipeIcon = ({ width, height, className }) => {
  const swipeIconRef = useRef(null);
  const pressIconRef = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax();
    handSwipeAni(swipeIconRef.current, pressIconRef.current);

    return () => {
      tl.kll(null, swipeIconRef.current);
      tl.kil(null, pressIconRef.current);
    };
  }, [swipeIconRef, pressIconRef]);

  return (
    <svg
      ref={swipeIconRef}
      id="swipe-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 109.61 170.96"
    >
      <path
        ref={pressIconRef}
        id="press-icon"
        d="M22.21 58.05a27.36 27.36 0 1 1 20.84.21"
        fill="none"
        stroke="#b44cff"
        strokeMiterlimit="10"
        strokeWidth="11"
      />
      <path
        id="pointer-finger"
        d="M22.05 107.7v-67c0-14.95 4.7-19.65 10.5-19.65a10.49 10.49 0 0 1 10.5 10.49v55.78"
        fill="none"
        stroke="#4d5d7e"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <path
        id="middle-knuckle1"
        d="M43.05 86.67v-17a10.5 10.5 0 0 1 10.49-10.5 10.49 10.49 0 0 1 10.51 10.48v13.5"
        fill="none"
        stroke="#4d5d7e"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <path
        id="middle-knuckle2"
        d="M64.05 89.05V75.54a10.5 10.5 0 0 1 10.47-10.49 10.49 10.49 0 0 1 10.53 10.49v13.51"
        fill="none"
        stroke="#4d5d7e"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <path
        id="right-palm"
        d="M85.05 96.05V84.19A10.48 10.48 0 0 1 95.54 73.7a10.49 10.49 0 0 1 10.49 10.49s.91 18.32-2.5 31.09c-3 11.29-5.39 18.83-9.36 27.63-4.42 9.84-4.84 24.55-4.84 24.55"
        fill="none"
        stroke="#4d5d7e"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <path
        id="left-palm"
        d="M29.12 166.69q-8.07-11.98-15.15-24.64c-5.12-9.1-10-18.84-10.21-29.28a36 36 0 0 1 18.22-31.72"
        fill="none"
        stroke="#4d5d7e"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
    </svg>
  );
};

export default SwipeIcon;
