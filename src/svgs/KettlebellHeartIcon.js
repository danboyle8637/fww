import React from "react";

const KettlebellHeartIcon = ({ width, height, className }) => {
  return (
    <svg
      id="kettlebell-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 136.39 187.6"
    >
      <defs>
        <linearGradient
          id="kbHeartGradient1"
          x1="91.87"
          y1="116.2"
          x2="108.88"
          y2="133.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
        <linearGradient
          id="kbHeartGradient2"
          x1="93.98"
          y1="118.46"
          x2="106.38"
          y2="131.16"
          xlinkHref="#kbHeartGradient1"
        />
        <linearGradient
          id="kbHeartGradient3"
          x1="94.04"
          y1="119.82"
          x2="105.35"
          y2="131.41"
          xlinkHref="#kbHeartGradient1"
        />
        <linearGradient
          id="kbHeartGradient4"
          x1="84.87"
          y1="104.5"
          x2="120.28"
          y2="140.77"
          xlinkHref="#kbHeartGradient1"
        />
      </defs>
      <path
        id="kettlebellHeart"
        d="M114.24 74.7c2.92-5.83 8-13.62 9.39-26.76C125.55 29.6 108.5 12.83 93 7.06 81.32 2.71 39-.23 20.05 21.65s1.36 53.8 1.36 53.8a64.2 64.2 0 1 0 92.81-.75zm-73.9-41.86c15-12.83 47.35-8.92 56.61 2.76 5.82 7.33 5 18.77-1.38 25.73a64.24 64.24 0 0 0-55.89.56c-1.61-1.92-13.44-17 .66-29.05z"
        fill="none"
        stroke="#2b2c3a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        d="M108.7 118.44l-.17-.18a6.22 6.22 0 0 0-8.78 0l-1.4 1.41-1.41-1.41a6.22 6.22 0 0 0-8.78 0l-.17.18a6.2 6.2 0 0 0 0 8.78l10.36 10.35 10.35-10.35a6.2 6.2 0 0 0 0-8.78z"
        transform="translate(-31.5 -6.4)"
        fill="url(#kbHeartGradient1)"
        id="small-heart1"
      />
      <path
        d="M108.7 118.44l-.17-.18a6.22 6.22 0 0 0-8.78 0l-1.4 1.41-1.41-1.41a6.22 6.22 0 0 0-8.78 0l-.17.18a6.2 6.2 0 0 0 0 8.78l10.36 10.35 10.35-10.35a6.2 6.2 0 0 0 0-8.78z"
        transform="translate(-31.5 -6.4)"
        fill="url(#kbHeartGradient1)"
        id="small-heart2"
      />
      <path
        d="M106.25 120.09l-.13-.13a4.54 4.54 0 0 0-6.4 0l-1 1-1-1a4.53 4.53 0 0 0-6.39 0l-.13.13a4.52 4.52 0 0 0 0 6.4l7.5 7.51 7.55-7.55a4.54 4.54 0 0 0 0-6.36z"
        transform="translate(-31.5 -6.4)"
        fill="url(#kbHeartGradient2)"
        id="small-heart3"
      />
      <path
        d="M105.23 121.31l-.11-.12a4.13 4.13 0 0 0-5.84 0l-.93.94-.94-.94a4.13 4.13 0 0 0-5.84 0l-.11.12a4.13 4.13 0 0 0 0 5.84l6.89 6.85 6.88-6.88a4.12 4.12 0 0 0 0-5.81z"
        transform="translate(-31.5 -6.4)"
        fill="url(#kbHeartGradient3)"
        id="small-heart4"
      />
      <path
        d="M119.91 109.17l-.37-.37a12.93 12.93 0 0 0-18.27 0l-2.92 2.92-2.93-2.92a12.93 12.93 0 0 0-18.27 0l-.37.37a12.93 12.93 0 0 0 0 18.27L98.35 149l21.56-21.56a12.93 12.93 0 0 0 0-18.27z"
        transform="translate(-31.5 -6.4)"
        fill="url(#kbHeartGradient4)"
        id="big-heart"
      />
    </svg>
  );
};

export default KettlebellHeartIcon;
