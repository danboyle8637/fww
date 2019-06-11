import React from "react"

const FourIcon = ({ width, height, className }) => {
  return (
    <svg
      id="four-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 193.3 202.87"
    >
      <defs>
        <linearGradient
          id="numFourGradient"
          x1="24.69"
          y1="120.9"
          x2="217.99"
          y2="120.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".13" stopColor="#50dbd3" />
          <stop offset=".56" stopColor="#337471" />
          <stop offset=".86" stopColor="#203234" />
          <stop offset="1" stopColor="#19191c" />
        </linearGradient>
      </defs>
      <path
        d="M161.69 26.46L91.14 127.71a11 11 0 0 0 9 17.29h29.49a11 11 0 0 0 11-11v-23.49h40.19V134a11 11 0 0 0 11 11H211v31.5h-19.15a11 11 0 0 0-11 11v27.83h-41.93V187.5a11 11 0 0 0-11-11H31.69v-28.13l87.59-121.91h42.41m5.75-7h-49.7a4 4 0 0 0-3.25 1.67l-89 123.94a4 4 0 0 0-.75 2.33v32.1a4 4 0 0 0 4 4h99.23a4 4 0 0 1 4 4v30.83a4 4 0 0 0 4 4h47.93a4 4 0 0 0 4-4V187.5a4 4 0 0 1 4-4H214a4 4 0 0 0 4-4V142a4 4 0 0 0-4-4h-22.15a4 4 0 0 1-4-4v-26.49a4 4 0 0 0-4-4h-46.19a4 4 0 0 0-4 4V134a4 4 0 0 1-4 4h-29.49a4 4 0 0 1-3.28-6.29l73.83-106a4 4 0 0 0-3.28-6.29z"
        transform="translate(-24.69 -19.46)"
        fill="url(#numFourGradient)"
        id="four"
      />
    </svg>
  )
}

export default FourIcon
