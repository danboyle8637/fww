import React from "react"

const InstagramIcon = ({ width, height, className }) => {
  return (
    <svg
      id="instagram-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 222 222"
    >
      <rect
        id="camera-outline"
        x="6"
        y="6"
        width="210"
        height="210"
        rx="52.07"
        fill="none"
        stroke="#5afdf2"
        strokeMiterlimit="10"
        strokeWidth="12"
      />
      <circle
        id="camera-center"
        cx="111.52"
        cy="111.52"
        r="48.34"
        fill="none"
        stroke="#5afdf2"
        strokeMiterlimit="10"
        strokeWidth="11.44"
      />
      <circle
        id="camera-flash"
        cx="171.04"
        cy="50.44"
        r="14.29"
        fill="#5afdf2"
      />
    </svg>
  )
}

export default InstagramIcon
