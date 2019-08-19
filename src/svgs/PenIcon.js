import React from "react";

const PenIcon = ({ width, height, className }) => {
  return (
    <svg
      id="pen-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 211.85 206.15"
    >
      <title>Pen Icon</title>
      <defs>
        <linearGradient
          id="penUtilGradient1"
          x1="41.33"
          y1="143.95"
          x2="86.96"
          y2="143.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
        <linearGradient
          id="penUtilGradient2"
          x1="176.68"
          y1="65.98"
          x2="111.79"
          y2="42.36"
          xlinkHref="#penUtilGradient1"
        />
        <linearGradient
          id="penUtilGradient3"
          x1="157.51"
          y1="33.77"
          x2="198.1"
          y2="33.77"
          xlinkHref="#penUtilGradient1"
        />
        <linearGradient
          id="penUtilGradient4"
          x1="23.29"
          y1="223.59"
          x2="40.26"
          y2="207.27"
          gradientTransform="rotate(-45.9 31.714 215.483)"
          xlinkHref="#penUtilGradient1"
        />
        <linearGradient
          id="penUtilGradient5"
          x1="78.96"
          y1="47.51"
          x2="92.42"
          y2="59.46"
          xlinkHref="#penUtilGradient1"
        />
      </defs>
      <path
        id="front-cap"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="15"
        stroke="url(#penUtilGradient1)"
        d="M81.5 162.37l-34.71-36.83"
      />
      <path
        id="pen-clamp"
        d="M181.92 37c-2.89-3.43-6.11-6.7-10.1-8.75s-8.87-2.74-13-.94c-3.25 1.42-5.69 4.2-7.79 7.06-4.37 5.94-7.74 12.53-11.54 18.85s-8.14 12.46-14 16.95-13.4 7.19-20.65 5.87"
        transform="translate(-20.86 -20.05)"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="10"
        stroke="url(#penUtilGradient2)"
      />
      <path
        id="back-clamp"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="10"
        stroke="url(#penUtilGradient3)"
        d="M194.55 50.63l-33.49-33.71"
      />
      <rect
        id="pen-tip"
        x="26.01"
        y="203.14"
        width="11.4"
        height="24.71"
        rx="4.81"
        transform="rotate(45.9 44.95 180.834)"
        fill="url(#penUtilGradient4)"
      />
      <path
        id="pen-body"
        d="M64.3 177.42c-18.36 14.44-46.16 15.63-46.16 15.63l-4.46-4.6s1.61-25.79 17.16-45.5c18.5-23.56 135.69-131.54 135.69-131.54a21 21 0 0 1 29.63.46l4.28 4.42a21 21 0 0 1-.46 29.66S91.55 155.95 64.3 177.42z"
        fill="none"
        stroke="#545885"
        strokeMiterlimit="10"
        strokeWidth="11"
      />
      <circle
        id="camp-tip"
        cx="84.01"
        cy="51.99"
        r="9"
        fill="url(#penUtilGradient5)"
      />
    </svg>
  );
};

export default PenIcon;
