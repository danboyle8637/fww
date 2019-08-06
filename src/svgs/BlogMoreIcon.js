import React, { useEffect, useRef } from "react";
import { TweenMax, Power2 } from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

const MoreIcon = ({ width, height, className, detailsOpen }) => {
  const rightRingRef = useRef(null);
  const middleRingRef = useRef(null);
  const leftRingRef = useRef(null);
  const closeRightCrossRef = useRef(null);
  const closeLeftCrossRef = useRef(null);
  const timeline = useRef(new TimelineMax({ paused: true }));

  useEffect(() => {
    const rightRing = rightRingRef.current;
    const middleRing = middleRingRef.current;
    const leftRing = leftRingRef.current;
    const closeRightCross = closeRightCrossRef.current;
    const closeLeftCross = closeLeftCrossRef.current;

    TweenMax.set(closeLeftCross, {
      transformOrigin: "50% 50%",
      x: -100,
      rotation: 360,
      autoAlpha: 0,
    });
    TweenMax.set(closeRightCross, {
      transformOrigin: "50% 50%",
      x: 100,
      rotation: -360,
      autoAlpha: 0,
    });

    const tl = timeline.current;

    tl.to(
      leftRing,
      0.5,
      {
        x: -50,
        autoAlpha: 0,
        ease: Power2.easeOut,
      },
      "-=0.3"
    )
      .to(
        middleRing,
        0.5,
        {
          x: -50,
          autoAlpha: 0,
          ease: Power2.easeOut,
        },
        "-=0.3"
      )
      .to(
        rightRing,
        0.5,
        {
          x: -50,
          autoAlpha: 0,
          ease: Power2.easeOut,
        },
        "-=0.3"
      )
      .to(
        closeLeftCross,
        0.3,
        {
          x: -105,
          rotation: 0,
          autoAlpha: 1,
          ease: Power2.easeOut,
        },
        "-=0.3"
      )
      .to(closeRightCross, 0.3, {
        x: -105,
        rotation: 0,
        autoAlpha: 1,
        ease: Power2.easeOut,
      });

    if (detailsOpen) {
      tl.play();
    } else {
      tl.reverse(1);
    }

    return () => {
      tl.kill();
    };
  }, [detailsOpen]);

  useEffect(() => {
    return () => {
      timeline.current = null;
    };
  }, []);

  return (
    <svg
      id="more-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 184.5 52"
    >
      <path
        ref={closeLeftCrossRef}
        fill="#19191c"
        stroke="#19191c"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="11"
        d="M138 5.5l41 41"
        id="left-cross"
      />
      <path
        ref={closeRightCrossRef}
        fill="#19191c"
        stroke="#19191c"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="11"
        d="M138 46.5l41-41"
        id="right-cross"
      />
      <path
        ref={leftRingRef}
        d="M32.36 24A15.36 15.36 0 1 1 17 39.36 15.38 15.38 0 0 1 32.36 24m0-9a24.36 24.36 0 1 0 24.36 24.36A24.36 24.36 0 0 0 32.36 15z"
        transform="translate(-8 -13.5)"
        fill="#19191c"
        id="left-ring"
      />
      <path
        ref={middleRingRef}
        d="M99.5 24a15.36 15.36 0 1 1-15.36 15.36A15.38 15.38 0 0 1 99.5 24m0-9a24.36 24.36 0 1 0 24.36 24.36A24.36 24.36 0 0 0 99.5 15z"
        transform="translate(-8 -13.5)"
        fill="#19191c"
        id="middle-ring"
      />
      <path
        ref={rightRingRef}
        d="M166.64 24a15.36 15.36 0 1 1-15.36 15.36A15.38 15.38 0 0 1 166.64 24m0-9A24.36 24.36 0 1 0 191 39.36 24.36 24.36 0 0 0 166.64 15z"
        transform="translate(-8 -13.5)"
        fill="#19191c"
        id="right-ring"
      />
    </svg>
  );
};

export default MoreIcon;
