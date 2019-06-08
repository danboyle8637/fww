import React from "react"

const MapIcon = ({ width, height, className, fill }) => {
  return (
    <svg
      id="map-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 156.13 232.26"
    >
      <path
        id="icon"
        d="M125 8.87a78.07 78.07 0 0 0-67.44 117.4l54.15 106.49a15.32 15.32 0 0 0 27.35-.08l53.06-105.85A78.08 78.08 0 0 0 125 8.87zM78.07 87.4a46.92 46.92 0 1 1 20.88 39 46.93 46.93 0 0 1-20.88-39z"
        transform="translate(-46.93 -8.87)"
        fill={fill || "#19191c"}
      />
    </svg>
  )
}

export default MapIcon
