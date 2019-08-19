import React from "react";

const ExternalLinkIcon = ({ width, height, className }) => {
  return (
    <svg
      id="external-link-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 83 83"
    >
      <title>External Link Icon</title>
      <path
        id="box"
        d="M77 43.44V59a18.05 18.05 0 0 1-18 18H24A18.05 18.05 0 0 1 6 59V24A18.05 18.05 0 0 1 24 6h13.71"
        fill="none"
        stroke="#B44CFF"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="12"
      />
      <path
        id="arrow-out"
        d="M92.92 11.22a3.37 3.37 0 0 0-.1-.34 2.8 2.8 0 0 0-.13-.41 2.75 2.75 0 0 0-.2-.38c0-.1-.1-.21-.16-.31a4.92 4.92 0 0 0-.5-.61 3.62 3.62 0 0 0-.6-.5l-.33-.17a2.58 2.58 0 0 0-.37-.19 3.1 3.1 0 0 0-.4-.13c-.12 0-.23-.08-.35-.1a4.53 4.53 0 0 0-.73-.08H67a4 4 0 0 0 0 8h12.34L48.17 47.17a4 4 0 0 0 5.66 5.66L85 21.66V34a4 4 0 0 0 8 0V12a4.13 4.13 0 0 0-.08-.78z"
        transform="translate(-10 -8)"
        fill="#B44CFF"
      />
    </svg>
  );
};

export default ExternalLinkIcon;
