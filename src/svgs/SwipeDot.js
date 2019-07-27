import React, { useEffect, useRef } from "react";
import { TimelineMax } from "gsap/TimelineMax";
import { TweenMax, Power2 } from "gsap/TweenMax";

import { useIsTweeningContext } from "../context/IsTweeningContent";

const SwipeDot = ({ width, height, className, swipeFill }) => {
  const [{ tweenCount }, dispatch] = useIsTweeningContext();

  const pressOutlineRef = useRef(null);
  const pressActiveRef = useRef(null);
  const pressPulseRef = useRef(null);
  const letterERef = useRef(null);
  const letterPRef = useRef(null);
  const letterIRef = useRef(null);
  const letterWRef = useRef(null);
  const letterSRef = useRef(null);

  useEffect(() => {
    const pressOutline = pressOutlineRef.current;
    const pressActive = pressActiveRef.current;
    const pressPulse = pressPulseRef.current;
    const letterE = letterERef.current;
    const letterP = letterPRef.current;
    const letterI = letterIRef.current;
    const letterW = letterWRef.current;
    const letterS = letterSRef.current;

    const tl = new TimelineMax({ repeat: 3 });
    const letterArray = [letterE, letterP, letterI, letterW, letterS];

    // Set all letter to opacity 0
    TweenMax.set([letterE, letterP, letterI, letterW, letterS], {
      autoAlpha: 0,
    });

    // Set press dot to right
    TweenMax.set(pressActive, {
      transformOrigin: "50% 50%",
      scale: 0,
      x: 140,
    });
    TweenMax.set([pressOutline, pressPulse], {
      transformOrigin: "50% 50%",
      x: 140,
    });

    tl.to(pressActive, 0.5, { scale: 1, ease: Power2.easeOut })
      .to(
        pressPulse,
        1,
        { scale: 1.4, autoAlpha: 0, ease: Power2.easeOut },
        "-=0.5"
      )
      .staggerTo(
        [pressOutline, pressActive],
        1,
        { x: 0, ease: Power2.easeOut },
        0
      )
      .staggerTo(
        letterArray,
        0.2,
        { autoAlpha: 1, ease: Power2.easeOut },
        0.09,
        "-=0.95"
      )
      .staggerTo(
        letterArray,
        0.2,
        { autoAlpha: 0, ease: Power2.easeOut, delay: 0.3 },
        0.09,
        "-=0.01"
      )
      .to(pressActive, 0.4, {
        scale: 1.4,
        autoAlpha: 0,
        ease: Power2.easeOut,
      })
      .to(pressOutline, 0.3, { x: 140, ease: Power2.easeOut });

    tl.addCallback(() => {
      dispatch({ type: "incrementTweenCount" });
    }, 1);

    return () => {
      tl.clear();
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (tweenCount > 3) {
      dispatch({ type: "toggleTweening" });
    }
  }, [tweenCount]);

  return (
    <svg
      id="swipe-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 275 79"
    >
      <g id="swipe" fill={swipeFill || "#4d5d7e"}>
        <path
          ref={letterSRef}
          id="letter-s"
          d="M101.45 90.2c0-2.66-.52-3.08-3.82-3.08-3.64 0-4.41.49-4.41 2.73 0 1.43.42 2.1 1.47 2.38a34.31 34.31 0 0 0 4.27.35c3.75.21 5.05.49 6.24 1.26 1.5 1 2 2.34 2 5.42s-.42 4.59-1.54 5.64c-1.48 1.36-3.33 1.75-8 1.75-5.71 0-7.74-.56-8.89-2.42-.74-1.12-1-2.34-1-5.25h5.14v.42a3 3 0 0 0 .74 2.45c.56.46 1 .53 4.24.53 2.13 0 2.66-.11 3.25-.56a2.85 2.85 0 0 0 .74-2.35c0-1-.18-1.64-.63-2s-.56-.45-4.8-.73c-3.82-.25-4.9-.42-6.09-1-1.82-.91-2.56-2.62-2.56-6 0-2.8.6-4.51 1.89-5.46 1.51-1 3.4-1.4 7.74-1.4 4.76 0 6.69.46 7.88 1.86a6.63 6.63 0 0 1 1.29 4.44v1z"
          transform="translate(-1 -55)"
        />
        <path
          ref={letterWRef}
          id="letter-w"
          d="M137.26 106.47h-7.81L127 96.88c-.53-2.2-.56-2.27-1.09-4.93l-.35-1.65h-.21L125 92c-.52 2.41-.59 2.69-1.19 4.93l-2.52 9.59h-7.7l-5.49-23.39h5.43L116.05 94c.45 2.06.56 2.52 1.19 6l.35 2h.21l.45-2c.14-.63.32-1.3.46-2s.56-2.21 1-4l2.91-10.85h5.84L131.27 94c.56 2.14.88 3.43 1.23 5.15l.63 2.76h.17l.39-2c.63-3.22.77-3.89 1.26-6l2.59-10.85H143z"
          transform="translate(-1 -55)"
        />
        <path
          ref={letterIRef}
          id="letter-i"
          d="M150.46 106.47h-5.39V83.13h5.39z"
          transform="translate(-1 -55)"
        />
        <path
          ref={letterPRef}
          id="letter-p"
          d="M154.41 83.13H167.47a6.12 6.12 0 0 1 5 2.59c.84 1.37 1.12 2.87 1.12 5.85 0 3.53-.6 5.53-2 6.65a6 6 0 0 1-3.59 1.39c-.21 0-1 0-3.71.11h-4.49v6.75h-5.39zm9.87 11.93c3.36 0 3.85-.45 3.85-3.64 0-2.38-.28-3.18-1.29-3.6a5.37 5.37 0 0 0-2.31-.25h-4.73v7.49z"
          transform="translate(-1 -55)"
        />
        <path
          ref={letterERef}
          id="letter-e"
          d="M181.5 92.68h10.4v3.82h-10.4v5.5h11.21v4.44h-16.6V83.13h16.46v4.44H181.5z"
          transform="translate(-1 -55)"
        />
      </g>
      <circle
        ref={pressActiveRef}
        cx="45.63"
        cy="39.63"
        r="23.53"
        fill="#b44cff"
        id="press-active"
        opacity=".4"
      />
      <path
        ref={pressPulseRef}
        d="M46.62 70.71a23.92 23.92 0 1 1-23.91 23.91 23.94 23.94 0 0 1 23.91-23.91m0-4.71a28.63 28.63 0 1 0 28.63 28.62A28.63 28.63 0 0 0 46.62 66z"
        transform="translate(-1 -55)"
        fill="#b44cff"
        id="press-pulse"
      />
      <path
        ref={pressOutlineRef}
        d="M46.62 75.41a19.22 19.22 0 1 1-19.21 19.21 19.24 19.24 0 0 1 19.21-19.21m0-9.41a28.63 28.63 0 1 0 28.63 28.62A28.63 28.63 0 0 0 46.62 66z"
        transform="translate(-1 -55)"
        fill="#b44cff"
        id="press-outline"
      />
      <path id="view-box-holder" fill="none" d="M0 0h275v79H0z" />
    </svg>
  );
};

export default SwipeDot;
