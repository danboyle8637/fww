import React, { useEffect, useRef, useState } from "react";
import { TweenMax, Power2 } from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

import useSVGObserver from "../hooks/useSVGObserver";
import DrawSVG from "../greensock/DrawSVGPlugin";

const WorkoutTimerIcon = ({ width, height, className, timerId }) => {
  // eslint-disable-next-line
  const drawSVG = DrawSVG;
  const [runCount10, setRunCount10] = useState(0);
  const [runCount20, setRunCount20] = useState(0);
  const [runCount30, setRunCount30] = useState(0);
  const shortWorkoutTimeRef = useRef(null);
  const longWorkoutTimeRef = useRef(null);

  const [setSVGNode, runAnimation] = useSVGObserver({
    rootMargin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    const shortWorkoutTimer = shortWorkoutTimeRef.current;
    const longWorkoutTimer = longWorkoutTimeRef.current;

    const tl = new TimelineMax();

    TweenMax.set(longWorkoutTimer, { drawSVG: "0%" });
    TweenMax.set(shortWorkoutTimer, { drawSVG: "0%" });

    if (timerId === 10 && runAnimation) {
      if (runCount10 < 1) {
        tl.to(longWorkoutTimer, 2, { drawSVG: "22%" }).to(
          shortWorkoutTimer,
          2,
          { drawSVG: "17%", ease: Power2.easeOut },
          "-=1.2"
        );
      } else {
        TweenMax.set(longWorkoutTimer, { drawSVG: "22%" });
        TweenMax.set(shortWorkoutTimer, { drawSVG: "17%" });
      }
      setRunCount10(c => c + 1);
    } else {
      if (runCount10 > 0) {
        TweenMax.set(longWorkoutTimer, { drawSVG: "22%" });
        TweenMax.set(shortWorkoutTimer, { drawSVG: "17%" });
      }
    }

    if (timerId === 20 && runAnimation) {
      if (runCount20 < 1) {
        tl.to(longWorkoutTimer, 2, { drawSVG: "52%", ease: Power2.easeOut }).to(
          shortWorkoutTimer,
          2,
          { drawSVG: "44%", ease: Power2.easeOut },
          "-=1.2"
        );
      } else {
        TweenMax.set(longWorkoutTimer, { drawSVG: "52%" });
        TweenMax.set(shortWorkoutTimer, { drawSVG: "44%" });
      }
      setRunCount20(c => c + 1);
    } else {
      if (runCount20 > 0) {
        TweenMax.set(longWorkoutTimer, { drawSVG: "52%" });
        TweenMax.set(shortWorkoutTimer, { drawSVG: "44%" });
      }
    }

    if (timerId === 30 && runAnimation) {
      if (runCount30 < 1) {
        tl.to(longWorkoutTimer, 2, { drawSVG: "90%", ease: Power2.easeOut }).to(
          shortWorkoutTimer,
          2,
          { drawSVG: "82%", ease: Power2.easeOut },
          "-=1.2"
        );
      } else {
        TweenMax.set(longWorkoutTimer, { drawSVG: "90%" });
        TweenMax.set(shortWorkoutTimer, { drawSVG: "82%" });
      }
      setRunCount30(c => c + 1);
    } else {
      if (runCount30 > 0) {
        TweenMax.set(longWorkoutTimer, { drawSVG: "90%" });
        TweenMax.set(shortWorkoutTimer, { drawSVG: "82%" });
      }
    }

    // tl.to(shortWorkoutTimer, 2, {
    //   drawSVG: "0%",
    // }).to(
    //   longWorkoutTimer,
    //   2,
    //   {
    //     drawSVG: "0%",
    //   },
    //   "-=1.2"
    // );

    return () => {
      tl.kill(null, longWorkoutTimer);
      tl.kill(null, shortWorkoutTimer);
    };
  }, [runAnimation]);

  return (
    <svg
      ref={setSVGNode}
      id="workout-timer-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 246 249"
    >
      <path
        ref={longWorkoutTimeRef}
        id="longer-workout"
        d="M123.04 41.48a82 82 0 1 1-.07 0"
        fill="#101010"
        stroke="#b44cff"
        strokeMiterlimit="10"
        strokeWidth="64.95"
      />
      <path
        ref={shortWorkoutTimeRef}
        id="shorter-workout"
        d="M123.04 41.48a82 82 0 1 1-.07 0"
        fill="#101010"
        stroke="#5afdf2"
        strokeMiterlimit="10"
        strokeWidth="64.95"
      />
      <path
        d="M126.18 24.35a101 101 0 1 1-101 101 101 101 0 0 1 101-101m0-22a123 123 0 0 0-87 210 123 123 0 0 0 174-173.94 122.18 122.18 0 0 0-87-36z"
        transform="translate(-3.18 -1.87)"
        fill="#101010"
        id="outter-ring"
      />
      <text
        transform="translate(107.78 20)"
        fontSize="24"
        fill="#d7daff"
        fontFamily="Eurostile-Hea, Eurostile"
      >
        12
      </text>
      <text
        transform="translate(115.39 243)"
        fontSize="24"
        fill="#d7daff"
        fontFamily="Eurostile-Hea, Eurostile"
      >
        6
      </text>
      <text
        transform="translate(227.36 130.48)"
        fontSize="24"
        fill="#d7daff"
        fontFamily="Eurostile-Hea, Eurostile"
      >
        3
      </text>
      <text
        transform="translate(3.36 130.48)"
        fontSize="24"
        fill="#d7daff"
        fontFamily="Eurostile-Hea, Eurostile"
      >
        9
      </text>
    </svg>
  );
};

export default WorkoutTimerIcon;
