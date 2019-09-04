import React, { Component } from "react";

class IgniteLogo extends Component {
  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        id="ignite-logo"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 477.76 150.72"
      >
        <defs>
          <linearGradient
            id="igniteLogoLettersGradient"
            x1="93.94"
            y1="155.54"
            x2="488.92"
            y2="155.54"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#b44cff" />
            <stop offset=".02" stopColor="#bb5dfe" />
            <stop offset=".07" stopColor="#c981fd" />
            <stop offset=".13" stopColor="#d6a1fc" />
            <stop offset=".19" stopColor="#e1bdfa" />
            <stop offset=".26" stopColor="#e9d3fa" />
            <stop offset=".35" stopColor="#f0e4f9" />
            <stop offset=".45" stopColor="#f5eff8" />
            <stop offset=".6" stopColor="#f7f6f8" />
            <stop offset="1" stopColor="#f8f8f8" />
          </linearGradient>
          <linearGradient
            id="igniteLogoFlame1"
            x1="53.31"
            y1="121.01"
            x2="51.78"
            y2="185.94"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#5afdf2" />
            <stop offset="1" stopColor="#b44cff" />
          </linearGradient>
          <linearGradient
            id="igniteLogoFlame2"
            x1="53.17"
            y1="160.62"
            x2="53.17"
            y2="124.27"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#5afdf2" />
            <stop offset=".65" stopColor="#9686fb" />
            <stop offset="1" stopColor="#b44cff" />
          </linearGradient>
          <linearGradient
            id="igniteLogoFlame3"
            x1="68.74"
            y1="78.34"
            x2="80.56"
            y2="77.82"
            xlinkHref="#igniteLogoFlame1"
          />
          <linearGradient
            id="igniteLogoFlame4"
            x1="11.15"
            y1="125.99"
            x2="34.76"
            y2="125.99"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#b44cff" />
            <stop offset="1" stopColor="#5afdf2" />
          </linearGradient>
        </defs>
        <g id="ignite-letters" fill="url(#igniteLogoLettersGradient)">
          <path
            id="letter-g"
            d="M180.67 150.82c.15 6 .3 12.35.3 19.18 0 15-1.6 21.06-6.83 26.73-6 6.25-13.95 8-36.76 8-14.38 0-20.34-.73-26-3.05-12.64-5.38-17.44-15.4-17.44-37 0-23.82.59-31.81 2.76-38.5 2.76-9 9.45-15.11 19.18-17.87 4.79-1.3 11.77-1.88 25.28-1.88 17.29 0 23 .87 29.49 4.64 6.83 3.93 9.59 11.19 10 25.72H158c-.87-10-3.34-11.62-19-11.62-12.64 0-17.58 1.59-20 6.68-1.89 3.78-2 4.5-2.18 22.23.29 21.35.29 21.5 2 25.42 2 4.79 7.26 6.54 19 6.54 17.29 0 20.92-2.76 20.92-16.13 0-.29-.15-1.74-.29-3.19h-21.07v-15.9z"
            transform="translate(-11.15 -54)"
          />
          <path
            id="letter-n"
            d="M286.86 204h-37.77l-21.36-46.92c-2.61-5.81-3.92-9-9.3-23.1l-3.05-7.7h-.87c.58 13.36.87 23.53.87 30.8V204h-21.93v-96.9h37.48l20.19 44.9c4.5 10 4.79 10.75 10.17 24.26l3.34 8h.87l-.29-7.55c-.58-10.9-.58-12.2-.58-22.52v-47.1h22.23z"
            transform="translate(-11.15 -54)"
          />
          <path
            id="letter-i"
            d="M325.49 204h-22.37v-96.9h22.37z"
            transform="translate(-11.15 -54)"
          />
          <path
            id="letter-t"
            d="M383.31 204h-22.37v-77.59h-26.15v-19.32h76v19.32h-27.48z"
            transform="translate(-11.15 -54)"
          />
          <path
            id="letter-e"
            d="M442.43 146.75h43.14v15.84h-43.14v22.95h46.49V204h-68.87v-96.9h68.28v18.45h-45.9z"
            transform="translate(-11.15 -54)"
          />
        </g>
        <g id="flame">
          <path
            id="flame1"
            d="M69.81 102.27a119.92 119.92 0 0 1-7.91-31.63c-4.3 33.25-33.62 48.62-40.95 81-5.66 25.1 14.9 59.63 43.81 52a57.56 57.56 0 0 1-5.65-2.49c-5.4-4-9.45-8.11-14.86-12.16-18-19.3-7.83-49.61 14.17-61.79a28.9 28.9 0 0 0-6.06-3.06 28.9 28.9 0 0 1 6.06 3.06c15 9.89 15.3 31.37 9.22 48.43-.54 5.92-1.78 11.34-2.94 13.85 33.54-29.27 18.3-54.14 5.11-87.21z"
            transform="translate(-11.15 -54)"
            fill="url(#igniteLogoFlame1)"
          />
          <path
            id="flame2"
            d="M58.42 127.19c-22 12.18-32.18 42.49-14.17 61.79 5.41 4.05 9.46 8.11 14.86 12.16a57.56 57.56 0 0 0 5.65 2.49c.71-.19 1.42-.38 2.14-.62-14.65-3-30.29-39-15.1-47.87 14.72-8.58 17 7.21 15.84 20.48 6.08-17.06 5.75-38.54-9.22-48.43z"
            transform="translate(-11.15 -54)"
            fill="url(#igniteLogoFlame2)"
          />
          <path
            id="flame3"
            d="M71.84 54c-3.47 16.2 13.53 34.34 7.36 48.09C64.17 93.5 68.86 67.92 71.84 54z"
            transform="translate(-11.15 -54)"
            fill="url(#igniteLogoFlame3)"
          />
          <path
            id="flame4"
            d="M34.74 98.17C25.25 118 4.59 131.6 13.21 153.8c3.2-20.29 22.3-32.75 21.53-55.63z"
            transform="translate(-11.15 -54)"
            fill="url(#igniteLogoFlame4)"
          />
        </g>
      </svg>
    );
  }
}

export default IgniteLogo;
