import React, { useEffect, useRef } from "react";

import followMeAni from "../Animations/Tweens/followMeAni";
import useSVGObserver from "../hooks/useSVGObserver";

const FollowPodcast = ({ width, height, className }) => {
  const podcastNameRef = useRef(null);
  const podcastIconRef = useRef(null);

  const [setSVGNode, runAnimation] = useSVGObserver({
    rootMargin: "0% 0% -50% 0%",
  });

  useEffect(() => {
    const podcastName = podcastNameRef.current;
    const podcastIcon = podcastIconRef.current;

    followMeAni(podcastIcon, podcastName, runAnimation, false);
  }, [runAnimation]);

  useEffect(() => {
    const podcastName = podcastNameRef.current;
    const podcastIcon = podcastIconRef.current;

    return () => {
      followMeAni(podcastIcon, podcastName, null, true);
    };
  }, []);

  return (
    <svg
      ref={setSVGNode}
      id="follow-me-podcast"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 600 280"
    >
      <defs>
        <linearGradient
          id="followPodcastGradient"
          x1="99.73"
          y1="297.68"
          x2="507.1"
          y2="-23.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#842bc1" />
          <stop offset=".65" stopColor="#bd59ea" />
          <stop offset="1" stopColor="#d66dfd" />
        </linearGradient>
      </defs>
      <path
        fill="url(#followPodcastGradient)"
        d="M0 0h600v280H0z"
        id="background"
      />
      <g ref={podcastNameRef} id="fit-womens-weekly-podcast" fill="#f8f8f8">
        <path d="M40.49 130.31v9.09c0 2 .4 2.63 1.7 2.63 1.74 0 2.19-1.34 2.19-6.57 0-8.1-.27-8.37-9.3-8.37-7.61 0-9.76.36-11.06 1.93-1.07 1.29-1.47 3.44-1.47 8a36.1 36.1 0 0 0 .8 9.13c.85 2.32 3 3 9.35 3s8.37-.44 8.82-1.79l3.17 1.26c-1.34 3-3.75 3.71-12.17 3.71-6.3 0-9-.67-11-2.77-1.7-1.75-2.28-4.88-2.28-11.77s.71-9.62 3.22-11.63c2.15-1.7 5-2.2 12.3-2.2 7 0 9.35.54 11 2.42 1.39 1.66 1.93 4.12 1.93 8.86 0 7.87-1.3 10-6 10-3.4 0-4.84-.76-5-2.64h-.13c-.54 1.92-2 2.73-4.66 2.73-4.25 0-5.59-1.7-5.59-7 0-4.66.09-5.15.94-6.36s2.37-1.83 4.61-1.83 3.49.58 4.16 2.15h.13v-2.06zm-10.16 6.58c0 4.7.32 5.28 2.87 5.28 1.74 0 2.5-.36 2.81-1.34a11.12 11.12 0 0 0 .23-3.22c0-1.93-.14-2.64-.49-3.23a3 3 0 0 0-2.6-1c-2.15-.03-2.82.83-2.82 3.51zM59.27 135.5H72v5.68H59.27v11.55h-6.89v-29.84h20.45v5.68H59.27zM81.91 127.58H76v-4.69h6zm0 25.15H76v-20.9h6zM101.23 136.22h-8v9.44c0 2.32.36 2.86 1.83 2.86 1.75 0 2.2-.67 2.2-3.4a4.37 4.37 0 0 0 0-.71h4.88v.94c0 2.59-.14 3.53-.54 4.51-.94 2.29-2.82 3.09-7.29 3.09-3.53 0-5.32-.72-6.35-2.55-.5-.85-.63-1.74-.63-3.71v-10.47h-2.65v-4.39h2.64v-4.51h6v4.51h8zM139.71 152.73h-10l-3.09-12.26c-.67-2.82-.71-2.91-1.38-6.31l-.45-2.1h-.27l-.45 2.1c-.67 3.09-.76 3.45-1.52 6.31l-3.22 12.26h-9.84l-7.07-29.84h6.93l3.22 13.87c.59 2.64.72 3.22 1.53 7.6l.44 2.55h.27l.58-2.55c.18-.8.41-1.65.59-2.5s.71-2.82 1.29-5.1l3.73-13.87h7.47l3.58 13.91c.71 2.73 1.11 4.38 1.56 6.58l.81 3.53h.22l.49-2.55c.81-4.11 1-5 1.61-7.6l3.31-13.87H147zM165.74 133.49c1.48 1.48 2.06 3.62 2.06 8 0 9.57-1.7 11.45-10.25 11.45-5 0-7.51-.89-8.81-3-1-1.74-1.25-3.31-1.25-8.59 0-4.38.58-6.48 2.23-8s3.45-1.79 8.19-1.79c4.43.05 6.35.5 7.83 1.93zM153.53 142c0 5.51.53 6.4 4.07 6.4s4.16-.89 4.16-6.71c0-4.7-.63-5.59-4.07-5.59s-4.16.9-4.16 5.9zM177.68 131.83l-.13 3.23h.09c.94-2.38 2.81-3.45 6.13-3.45 3.89 0 6 1.39 6.26 4h.09c.85-2.78 2.82-4 6.4-4 2.81 0 5 .94 6.08 2.51a8.84 8.84 0 0 1 .94 4.69v13.92h-5.95v-12.22c0-3.22-.67-4.16-3.09-4.16-1.65 0-3 .58-3.53 1.48a7.09 7.09 0 0 0-.4 2.64v12.26h-5.95v-12.62a6.24 6.24 0 0 0-.32-2.64c-.36-.71-1.3-1.12-2.64-1.12-2.82 0-4 1.21-4 4.16v12.22h-6v-20.9zM227 145.88v.58a7 7 0 0 1-1.12 4.07c-1.25 1.7-3.53 2.42-7.92 2.42-4.6 0-7-.58-8.54-2.06s-2.1-3.84-2.1-8.9c0-4.56.53-6.76 2-8.23s3.89-2.15 7.92-2.15c7.6 0 9.75 2.15 9.75 9.89v1.83h-13.7a6.37 6.37 0 0 0 0 .85c0 3.58.9 4.52 4.16 4.52 3 0 3.72-.54 3.76-2.82zm-5.77-6a6 6 0 0 1 0-.72c-.05-2.73-.67-3.22-4-3.22-2.32 0-3.13.31-3.57 1.39a6.26 6.26 0 0 0-.32 2.55zM236.91 131.83l-.23 3.81h.14c1-2.87 2.86-4 6.3-4 3.27 0 5.51.94 6.54 2.73a7.39 7.39 0 0 1 .71 3.89v14.5h-6v-12.29c0-3.45-.53-4.16-3.13-4.16-2.95 0-4.34 1.3-4.34 4.11v12.31h-6v-20.9zM267.28 137.69c-.36-1.92-.63-2.1-3.67-2.1-1.92 0-2.5.09-3 .4a2 2 0 0 0-.67 1.7c0 1.08.36 1.71 1.12 1.88.45.14.85.18 4.21.32 4.11.22 5.45.44 6.62 1.29s1.92 2.55 1.92 4.84-.67 4.07-2 5.19c-1.61 1.29-3.71 1.74-8.23 1.74-5.24 0-7.61-.72-8.73-2.73-.62-1-.8-2-.8-4.07h6.13a2.37 2.37 0 0 0-.05.49c0 1.88.67 2.28 3.85 2.28s4-.44 4-2.28-.63-2.28-3-2.28c-3.93 0-6-.22-7.38-.67-2.46-.76-3.49-2.46-3.49-5.73 0-5 2.06-6.35 9.75-6.35 7.12 0 9 1.3 9 6.08zM312.46 152.73h-10l-3.09-12.26c-.67-2.82-.72-2.91-1.39-6.31l-.45-2.1h-.26l-.45 2.1c-.67 3.09-.76 3.45-1.52 6.31l-3.22 12.26h-9.85l-7.06-29.84h6.93l3.22 13.87c.58 2.64.72 3.22 1.52 7.6l.45 2.55h.27l.58-2.55c.18-.8.4-1.65.58-2.5s.72-2.82 1.3-5.1l3.71-13.87h7.47l3.58 13.91c.72 2.73 1.12 4.38 1.57 6.58l.8 3.53h.23l.49-2.55c.81-4.11 1-5 1.61-7.6l3.31-13.87h6.93zM339.84 145.88v.58a7.1 7.1 0 0 1-1.12 4.07c-1.25 1.7-3.54 2.42-7.92 2.42-4.61 0-7-.58-8.55-2.06s-2.1-3.84-2.1-8.9c0-4.56.54-6.76 2-8.23s3.89-2.15 7.91-2.15c7.61 0 9.76 2.15 9.76 9.89v1.83H326.1a7.94 7.94 0 0 0 0 .85c0 3.58.89 4.52 4.16 4.52 3 0 3.71-.54 3.76-2.82zm-5.77-6a4.82 4.82 0 0 1-.05-.72c0-2.73-.67-3.22-4-3.22-2.33 0-3.13.31-3.58 1.39a6.33 6.33 0 0 0-.31 2.55zM362.61 145.88v.58a7.1 7.1 0 0 1-1.12 4.07c-1.26 1.7-3.54 2.42-7.92 2.42-4.61 0-7-.58-8.55-2.06s-2.1-3.84-2.1-8.9c0-4.56.54-6.76 2-8.23s3.9-2.15 7.92-2.15c7.61 0 9.76 2.15 9.76 9.89v1.83h-13.73a7.94 7.94 0 0 0 0 .85c0 3.58.89 4.52 4.16 4.52 3 0 3.71-.54 3.76-2.82zm-5.78-6a6 6 0 0 1 0-.72c0-2.73-.67-3.22-4-3.22-2.33 0-3.13.31-3.58 1.39a6.15 6.15 0 0 0-.31 2.55zM372.27 139.84h1.25l4.83-8h6.71l-6.58 9.94 8 11h-7.12l-5.86-8.91h-1.2v8.91h-5.95v-29.89h5.95zM395 152.73h-5.95v-29.84H395zM413 154.07c-1.48 6.26-3.31 7.87-9 7.87h-1.79v-4.21a7.17 7.17 0 0 0 .94.05 3.11 3.11 0 0 0 2.73-1 9 9 0 0 0 1.3-4H404l-6.49-20.9h6.27l2.37 8.68 1.16 4.34.54 2.15.58 2.19h.09c.54-2.82 1.16-5.72 1.79-8.68l1.88-8.68h6.13zM420.57 122.89H437.26a7.83 7.83 0 0 1 6.45 3.31c1.07 1.75 1.43 3.67 1.43 7.47 0 4.52-.76 7.07-2.51 8.5a7.7 7.7 0 0 1-4.74 1.75c-.27 0-1.21 0-4.74.13h-5.69v8.64h-6.89zm12.62 15.25c4.3 0 4.92-.58 4.92-4.65 0-3-.36-4.07-1.65-4.61a6.91 6.91 0 0 0-3-.31h-6v9.57zM465.89 133.49c1.48 1.48 2.06 3.62 2.06 8 0 9.57-1.7 11.45-10.25 11.45-5 0-7.51-.89-8.81-3-1-1.74-1.25-3.31-1.25-8.59 0-4.38.58-6.48 2.24-8s3.44-1.79 8.18-1.79c4.43.05 6.36.5 7.83 1.93zM453.68 142c0 5.51.53 6.4 4.07 6.4s4.16-.89 4.16-6.71c0-4.7-.63-5.59-4.07-5.59s-4.16.9-4.16 5.9zM491 152.73h-5.77l.22-3.67h-.13c-1.07 2.91-2.64 3.89-6.26 3.89-2.82 0-4.88-.63-6.13-1.88-1.57-1.56-1.93-3.31-1.93-9.17 0-4.74.36-6.49 1.75-8.14 1.21-1.43 3.17-2.15 6.17-2.15 3.4 0 5.06.94 6 3.36h.09v-12.08H491zm-14-10.61c0 5.33.63 6.31 3.94 6.31a4.73 4.73 0 0 0 3.22-.85c.76-.71.94-1.79.94-5.41 0-5-.63-5.91-4.2-5.91-3.38 0-3.9.81-3.9 5.86zM514.43 144.54c0 3.22-.23 4.52-1 5.77-1.26 2-3.13 2.64-7.92 2.64-4.43 0-6.62-.49-8.23-1.92s-2.33-3.72-2.33-8.77c0-4.43.45-6.53 1.7-8.1 1.39-1.74 3.89-2.55 8-2.55 7.56 0 9.58 1.66 9.58 7.83h-5.77c-.05-2.64-.67-3.27-3.4-3.27-3.63 0-4 .63-4 6.13 0 5.33.49 6.09 4 6.09 3.08 0 3.58-.54 3.58-3.85zM518.09 138c0-5.1 1.79-6.35 9-6.35 5.55 0 8 .89 9.17 3.27a11.81 11.81 0 0 1 .72 4.25v13.6h-5.95l.22-3.13h-.13c-1 2.59-2.51 3.35-6.49 3.35-5.46 0-7.43-1.74-7.43-6.58 0-4.56 2.15-6.39 7.56-6.39 4 0 5.28.53 6.18 2.5h.09v-3.76c0-2.59-.85-3.35-3.72-3.35-2.59 0-3.13.45-3.26 2.59zm5.19 8.24c0 2.23.76 2.72 4 2.72 2.91 0 3.76-.62 3.76-2.68s-.9-2.51-4.08-2.51c-2.83-.04-3.68.55-3.68 2.43zM553.7 137.69c-.36-1.92-.63-2.1-3.67-2.1-1.92 0-2.5.09-3 .4a2 2 0 0 0-.68 1.7c0 1.08.36 1.71 1.12 1.88.45.14.85.18 4.21.32 4.11.22 5.46.44 6.62 1.29s1.92 2.55 1.92 4.84-.67 4.07-2 5.19c-1.61 1.29-3.71 1.74-8.23 1.74-5.24 0-7.61-.72-8.73-2.73-.62-1-.8-2-.8-4.07h6.13a2.37 2.37 0 0 0-.05.49c0 1.88.67 2.28 3.85 2.28s4-.44 4-2.28-.63-2.28-3-2.28c-3.93 0-6-.22-7.38-.67-2.46-.76-3.49-2.46-3.49-5.73 0-5 2.06-6.35 9.76-6.35 7.11 0 9 1.3 9 6.08zM578.75 136.22h-8v9.44c0 2.32.36 2.86 1.83 2.86 1.75 0 2.19-.67 2.19-3.4a5.45 5.45 0 0 0 0-.71h4.88v.94c0 2.59-.14 3.53-.54 4.51-.94 2.29-2.82 3.09-7.29 3.09-3.54 0-5.33-.72-6.36-2.55-.49-.85-.62-1.74-.62-3.71v-10.47h-2.64v-4.39h2.64v-4.51h5.95v4.51h8z" />
      </g>
      <g ref={podcastIconRef} id="podcast-icon" fill="#fff">
        <circle id="head" cx="299.86" cy="116.32" r="26.96" />
        <path
          id="body"
          d="M303.48 267h-5.09c-14.51-1.05-17.17-3.95-18-14l-7.76-76.26c0-14.16 11.59-20.41 25.75-20.41h2.41c14.16 0 25.74 6.25 25.74 20.41l-8.11 77.95c-2.26 9.86-1.42 10.54-14.94 12.31z"
        />
        <path
          id="outter-circle"
          d="M415 127.26A115 115 0 0 1 331 238l2.51-19.43a97.27 97.27 0 1 0-66.21.26l2.43 19.33A115 115 0 1 1 415 127.26z"
        />
        <path
          id="inner-circle"
          d="M371.44 121.87a71.41 71.41 0 0 1-33.26 60.4l1.53-11.91a19.92 19.92 0 0 0-2.44-9.88 53.71 53.71 0 1 0-74 .66 20.17 20.17 0 0 0-2.09 9.22l1.58 12.55a71.49 71.49 0 1 1 108.68-61z"
        />
      </g>
    </svg>
  );
};

export default FollowPodcast;
