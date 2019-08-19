import React, { useEffect, useRef } from "react";
import { Power2 } from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

const ChatTextIcon = ({ width, height, className }) => {
  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const dot3Ref = useRef(null);

  useEffect(() => {
    const dot1 = dot1Ref.current;
    const dot2 = dot2Ref.current;
    const dot3 = dot3Ref.current;
    const tl = new TimelineMax({ repeat: -1 });

    const dotArray = [dot1, dot2, dot3];

    tl.staggerTo(
      dotArray,
      1,
      {
        transformOrigin: "50% 50%",
        scale: 1.1,
        fill: "#2e2e36",
        ease: Power2.easeOut,
      },
      0.2,
      "-=0.4"
    ).staggerTo(
      dotArray,
      1,
      {
        scale: 1,
        fill: "#282830",
        ease: Power2.easeOut,
      },
      0.2,
      "-=0.4"
    );

    return () => {
      tl.kill(null, dotArray);
    };
  }, []);

  return (
    <svg
      id="chat-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 286.53 177.64"
    >
      <title>Text Message Icon</title>
      <path
        id="word-bubble"
        d="M226 38.36H74.5A67.5 67.5 0 0 0 7 105.86v12.64A67.5 67.5 0 0 0 74.5 186h126.34C212 204 256 216 256 216c-12.24-7.34-14.35-24.67-10.12-33a67.53 67.53 0 0 0 47.65-64.53v-12.61A67.5 67.5 0 0 0 226 38.36z"
        transform="translate(-7 -38.36)"
        fill="#212126"
      />
      <circle
        ref={dot1Ref}
        id="dot1"
        cx="63"
        cy="75.64"
        r="27"
        fill="#282830"
      />
      <circle
        ref={dot2Ref}
        id="dot2"
        cx="143"
        cy="75.64"
        r="27"
        fill="#282830"
      />
      <circle
        ref={dot3Ref}
        id="dot3"
        cx="223"
        cy="75.64"
        r="27"
        fill="#282830"
      />
    </svg>
  );
};

export default ChatTextIcon;
