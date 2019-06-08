import React from "react"

const PodcastIcon = ({ width, height, className }) => {
  return (
    <svg
      id="podcast-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 196.17 217.31"
    >
      <circle id="head" cx="97.94" cy="88.75" r="23" fill="#5afdf2" />
      <path
        id="body"
        d="M116.09 234.89h-4.35C99.37 234 97.1 231.54 96.4 223l-6.62-65.07c0-12.08 9.89-17.4 22-17.4h2.06c12.08 0 22 5.32 22 17.4l-6.91 66.51c-2.02 8.38-1.28 8.96-12.84 10.45z"
        transform="translate(-15.06 -17.61)"
        fill="#5afdf2"
      />
      <path
        id="outer-circle"
        d="M113.15 17.61a98.09 98.09 0 0 0-20.62 194l-1.71-16a83 83 0 1 1 43.78.25l-1.74 15.94a98.1 98.1 0 0 0-19.71-194.19z"
        transform="translate(-15.06 -17.61)"
        fill="#b3fffa"
      />
      <path
        id="inner-circle"
        d="M113.07 50.1a61 61 0 0 0-25.35 116.48l-1.2-11.25a18.72 18.72 0 0 1 1-6.18 45.85 45.85 0 1 1 50.65.31 19 19 0 0 1 .88 5.87l-1.26 11.54A61 61 0 0 0 113.07 50.1z"
        transform="translate(-15.06 -17.61)"
        fill="#5afdf2"
      />
    </svg>
  )
}

export default PodcastIcon
