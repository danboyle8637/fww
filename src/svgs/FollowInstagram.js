import React, { useEffect, useRef } from "react";

import followMeAni from "../Animations/Tweens/followMeAni";
import useSVGObserver from "../hooks/useSVGObserver";

const FollowInstagram = ({ width, height, className }) => {
  const instagramNameRef = useRef(null);
  const instagramIconRef = useRef(null);

  const [setSVGNode, runAnimation] = useSVGObserver({
    rootMargin: "0% 0% -50% 0%",
    threshold: 0.5,
  });

  useEffect(() => {
    const instagramName = instagramNameRef.current;
    const instagramIcon = instagramIconRef.current;

    followMeAni(instagramIcon, instagramName, runAnimation, false);
  }, [runAnimation]);

  useEffect(() => {
    const instagramName = instagramNameRef.current;
    const instagramIcon = instagramIconRef.current;

    return () => {
      followMeAni(instagramIcon, instagramName, null, true);
    };
  }, []);

  return (
    <svg
      ref={setSVGNode}
      id="instagram-follow-me"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 600.01 280"
    >
      <defs>
        <linearGradient
          id="followInstagramGradient"
          x1="17.55"
          y1="302.03"
          x2="588.83"
          y2="-25.69"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".07" stopColor="#fecb55" />
          <stop offset=".15" stopColor="#fbb760" />
          <stop offset=".3" stopColor="#f4827b" />
          <stop offset=".51" stopColor="#e92fa7" />
          <stop offset=".55" stopColor="#e61bb2" />
          <stop offset=".6" stopColor="#e01cb3" />
          <stop offset=".66" stopColor="#cf1fb7" />
          <stop offset=".73" stopColor="#b224bd" />
          <stop offset=".8" stopColor="#8b2ac5" />
          <stop offset=".88" stopColor="#5832d0" />
          <stop offset=".97" stopColor="#1b3ddd" />
          <stop offset="1" stopColor="#0041e3" />
        </linearGradient>
      </defs>
      <path
        fill="url(#followInstagramGradient)"
        d="M0 0h600.01v280H0z"
        id="background"
      />
      <g ref={instagramNameRef} id="trainerKindal" fill="#f8f8f8">
        <path
          id="_"
          data-name="@"
          d="M80.49 122.21v16.07c0 3.48.71 4.67 3 4.67 3.09 0 3.88-2.37 3.88-11.63 0-14.33-.47-14.8-16.46-14.8-13.46 0-17.26.63-19.55 3.4-1.9 2.29-2.61 6.09-2.61 14.25 0 7.67.55 13.53 1.42 16.14 1.51 4.12 5.23 5.31 16.54 5.31 11.08 0 14.8-.8 15.6-3.17l5.62 2.22c-2.38 5.3-6.65 6.56-21.53 6.56-11.16 0-16-1.18-19.47-4.9-3-3.09-4-8.63-4-20.82 0-12.42 1.27-17 5.7-20.58 3.8-3 8.79-3.87 21.76-3.87 12.35 0 16.55.94 19.4 4.27 2.45 2.93 3.4 7.28 3.4 15.67 0 13.93-2.3 17.73-10.69 17.73-6 0-8.54-1.35-8.78-4.67h-.24c-1 3.4-3.48 4.83-8.23 4.83-7.52 0-9.89-3-9.89-12.43 0-8.23.16-9.1 1.66-11.24 1.62-2.22 4.15-3.22 8.11-3.22 4.2 0 6.17 1 7.36 3.8l.24.08v-3.65zm-18 11.64c0 8.31.55 9.34 5.06 9.34 3.09 0 4.44-.63 5-2.38.32-1.1.4-2.05.4-5.69 0-3.41-.24-4.67-.87-5.7-.8-1.19-2.38-1.82-4.59-1.82-3.78 0-4.97 1.5-4.97 6.25z"
          transform="translate(.01)"
        />
        <path
          id="t"
          d="M124 161.87h-12.18V119.6H97.58v-10.52H139v10.52h-15z"
          transform="translate(.01)"
        />
        <path
          id="r"
          d="M148.31 124.91l-.56 5.62h.16c2.38-4.6 4.83-6.1 9.74-6.1s7.75 1.9 8.94 5.86c.55 1.9.63 3.08.63 9.89h-9.65v-1.5c0-4.83-.8-6.1-3.88-6.1a4.87 4.87 0 0 0-4.91 3.17c-.39 1.11-.47 1.74-.47 4.59v21.53h-10.53v-37z"
          transform="translate(.01)"
        />
        <path
          id="a"
          d="M172.36 135.75c-.07-9 3.17-11.24 16-11.24 9.82 0 14.17 1.58 16.23 5.78.71 1.34 1.26 4.83 1.26 7.52v24.06h-10.53l.39-5.54h-.23c-1.83 4.59-4.44 5.93-11.48 5.93-9.66 0-13.14-3.08-13.14-11.63 0-8.07 3.8-11.32 13.38-11.32 7.12 0 9.34.95 10.92 4.43h.16v-6.65c0-4.59-1.51-5.93-6.57-5.93-4.59 0-5.54.79-5.78 4.59zm9.19 14.56c0 4 1.34 4.83 7.12 4.83 5.14 0 6.65-1.11 6.65-4.75 0-3.48-1.59-4.43-7.21-4.43-5.06.04-6.56 1.04-6.56 4.35z"
          transform="translate(.01)"
        />
        <path
          id="i"
          d="M224.6 117.39h-10.53v-8.31h10.53zm0 44.48h-10.53v-37h10.53z"
          transform="translate(.01)"
        />
        <path
          id="n"
          d="M243.51 124.91l-.39 6.72h.23c1.82-5.06 5.07-7.12 11.16-7.12 5.78 0 9.74 1.66 11.56 4.83.95 1.74 1.27 3.4 1.27 6.88v25.65h-10.53v-21.69c0-6.09-.95-7.36-5.54-7.36-5.23 0-7.68 2.3-7.68 7.28v21.77H233v-37z"
          transform="translate(.01)"
        />
        <path
          id="e"
          d="M308.88 149.76v1a12.53 12.53 0 0 1-2 7.2c-2.22 3-6.26 4.27-14 4.27-8.16 0-12.35-1-15.12-3.64s-3.72-6.8-3.72-15.75c0-8.07.95-12 3.56-14.56 2.77-2.69 6.89-3.8 14-3.8 13.46 0 17.25 3.8 17.25 17.49v3.25h-24.26a12.24 12.24 0 0 0-.08 1.5c0 6.33 1.58 8 7.36 8 5.38 0 6.57-1 6.65-5zm-10.21-10.61a10.5 10.5 0 0 1-.07-1.26c-.08-4.83-1.19-5.7-7.05-5.7-4.11 0-5.54.55-6.33 2.45-.4 1-.48 1.58-.55 4.51z"
          transform="translate(.01)"
        />
        <path
          id="r-2"
          data-name="r"
          d="M326.37 124.91l-.55 5.62h.18c2.37-4.6 4.82-6.1 9.73-6.1s7.76 1.9 9 5.86c.55 1.9.63 3.08.63 9.89h-9.66v-1.5c0-4.83-.79-6.1-3.88-6.1a4.87 4.87 0 0 0-4.9 3.17c-.4 1.11-.48 1.74-.48 4.59v21.53h-10.6v-37z"
          transform="translate(.01)"
        />
        <path
          id="k"
          d="M362.54 129.81h4.51l15.51-20.73h14.8l-19.94 25.8 21.77 27h-15.12l-16.94-21.69h-4.59v21.69h-12.19v-52.8h12.19z"
          transform="translate(.01)"
        />
        <path
          id="i-2"
          data-name="i"
          d="M414 117.39h-10.55v-8.31H414zm0 44.48h-10.55v-37H414z"
          transform="translate(.01)"
        />
        <path
          id="n-2"
          data-name="n"
          d="M432.89 124.91l-.39 6.72h.24c1.82-5.06 5.06-7.12 11.16-7.12 5.77 0 9.73 1.66 11.55 4.83.95 1.74 1.27 3.4 1.27 6.88v25.65h-10.53v-21.69c0-6.09-.95-7.36-5.54-7.36-5.22 0-7.68 2.3-7.68 7.28v21.77h-10.6v-37z"
          transform="translate(.01)"
        />
        <path
          id="d"
          d="M498.82 161.87h-10.21l.4-6.49h-.24c-1.9 5.14-4.67 6.88-11.08 6.88-5 0-8.63-1.1-10.85-3.32-2.77-2.77-3.4-5.86-3.4-16.23 0-8.39.63-11.47 3.09-14.4 2.14-2.53 5.62-3.8 10.92-3.8 6 0 8.94 1.66 10.68 5.94h.16v-21.37h10.53zM474 143.11c0 9.42 1.11 11.16 7 11.16 2.69 0 4.59-.48 5.7-1.5 1.35-1.27 1.66-3.17 1.66-9.58 0-8.87-1.1-10.45-7.44-10.45-6 0-6.92 1.43-6.92 10.37z"
          transform="translate(.01)"
        />
        <path
          id="a-2"
          data-name="a"
          d="M506.57 135.75c-.07-9 3.17-11.24 16-11.24 9.82 0 14.17 1.58 16.23 5.78.71 1.34 1.26 4.83 1.26 7.52v24.06h-10.53l.39-5.54h-.24c-1.82 4.59-4.43 5.93-11.47 5.93-9.66 0-13.14-3.08-13.14-11.63 0-8.07 3.8-11.32 13.38-11.32 7.12 0 9.34.95 10.92 4.43h.16v-6.65c0-4.59-1.51-5.93-6.57-5.93-4.59 0-5.54.79-5.78 4.59zm9.18 14.56c0 4 1.35 4.83 7.13 4.83 5.14 0 6.65-1.11 6.65-4.75 0-3.48-1.59-4.43-7.21-4.43-5.06.04-6.57 1.04-6.57 4.35z"
          transform="translate(.01)"
        />
        <path
          id="l"
          d="M558.81 161.87h-10.53v-52.79h10.53z"
          transform="translate(.01)"
        />
      </g>
      <path
        ref={instagramIconRef}
        id="instagram-icon"
        d="M378.77 15H250.23A63.23 63.23 0 0 0 187 78.23v128.54A63.23 63.23 0 0 0 250.23 270h128.54A63.23 63.23 0 0 0 442 206.77V78.23A63.23 63.23 0 0 0 378.77 15zm-63.64 186.83a58.7 58.7 0 1 1 58.7-58.7 58.7 58.7 0 0 1-58.7 58.7zM387.4 86.32A17.36 17.36 0 1 1 404.76 69a17.36 17.36 0 0 1-17.36 17.32z"
        transform="translate(.01)"
        fill="#f8f8f8"
      />
    </svg>
  );
};

export default FollowInstagram;
