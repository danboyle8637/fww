import React from "react";

const BlogIntensityIcon = ({ width, height, className }) => {
  return (
    <svg
      id="intensity-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 104 175"
    >
      <title>Workout Intensity Tip Icon</title>
      <defs>
        <linearGradient
          id="blogIntensityIconGradient"
          x1="40.04"
          y1="100"
          x2="144.04"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b44cff" />
          <stop offset=".45" stopColor="#88a2f9" />
          <stop offset=".83" stopColor="#67e4f4" />
          <stop offset="1" stopColor="#5afdf2" />
        </linearGradient>
      </defs>
      <path
        id="sweat-drop"
        d="M139.16 113.5l-.26-.54L91.79 12.5l-46.88 101a52 52 0 1 0 94.24 0z"
        transform="translate(-40.04 -12.5)"
        fill="url(#blogIntensityIconGradient)"
      />
      <path
        d="M79.89 76.41L57 125.7a25.39 25.39 0 0 0 23 36.12s-6.44-13.52-6.61-25.16c-.17-13.66 6.5-60.25 6.5-60.25z"
        transform="translate(-40.04 -12.5)"
        fill="#2b2c3a"
        id="sweat-reflection"
      />
    </svg>
  );
};

export default BlogIntensityIcon;
