import React from "react";

const KettlebellClinicLogo = ({ width, height, className }) => {
  return (
    <svg
      id="kettlebell-clinic-logo"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 451.35 127.54"
    >
      <defs>
        <linearGradient
          id="kettlebellGradient"
          x1="138.78"
          y1="113.12"
          x2="473.21"
          y2="113.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b3b6e1" />
          <stop offset=".32" stopColor="#dfe0f0" />
          <stop offset=".53" stopColor="#f8f8f8" />
        </linearGradient>
        <linearGradient
          id="clinicGradient"
          x1="136.51"
          y1="177.69"
          x2="474.07"
          y2="177.69"
          xlinkHref="#kettlebellGradient"
        />
      </defs>
      <g id="kettlebell" fill="url(#kettlebellGradient)">
        <path
          d="M147.13 109.24h3.09L160.85 95H171l-13.67 17.68 14.92 18.5h-10.37l-11.6-14.86h-3.15v14.86h-8.35V95h8.35zM187 109.84h16.1v5.91H187v8.57h17.36v6.89h-25.72V95h25.5v6.89H187zM228.7 131.21h-8.35v-29h-9.76V95H239v7.21h-10.3zM262.6 131.21h-8.35v-29h-9.77V95h28.37v7.21H262.6zM288.09 124h16v7.22h-24.35V95h8.35zM319.28 109.84h16.11v5.91h-16.11v8.57h17.36v6.89h-25.72V95h25.5v6.89h-17.14zM345.09 95h18.77c3.53 0 5.7.38 7.22 1.25 2.44 1.35 3.58 4 3.58 8.29 0 3.48-.6 5.27-2.12 6.51a6.89 6.89 0 0 1-3.54 1.55v.17c4.82.59 6.4 2.65 6.4 8.57 0 7.37-2.77 9.87-11 9.87h-19.31zm15.63 14.81c3.31-.06 3.58-.11 4.28-.55 1-.54 1.36-1.62 1.36-3.63 0-3.09-.76-3.74-4.12-3.74h-8.79v7.92zm-.27 14.48c5.64 0 6.67-.65 6.67-4.12 0-2.5-.44-3.58-1.68-4.13-.71-.27-.87-.27-4.07-.32h-7.92v8.57zM391.85 109.84H408v5.91h-16.15v8.57h17.36v6.89H383.5V95H409v6.89h-17.15zM426 124h16v7.22h-24.33V95H426zM457.21 124h16v7.22h-24.36V95h8.36z"
          transform="translate(-22.72 -93.35)"
        />
      </g>
      <g id="clinic" fill="url(#clinicGradient)">
        <path
          d="M201.1 187.63V190c0 12-1.24 16.17-5.84 20.22a23.16 23.16 0 0 1-10.45 4.78c-2.47.45-8.65.67-16.29.67-14.26 0-18.31-.9-23.81-5.28-3.71-2.92-6.52-8.2-7.19-13.7-.56-4.83-1-14.72-1-25.17 0-13.93 1.68-20.1 6.74-24.93 5.84-5.62 11.57-7 29.43-7 10.45 0 13.93.45 18.09 2.36 5.16 2.36 8 6.29 9.09 12.81.45 2.47.57 4.38.79 11.34h-17.2c-.11-5.39-.33-6.51-1.23-8.2-1.46-2.58-4.38-3.37-12.25-3.37-7.41 0-10.89.79-12.91 2.81-2.36 2.47-2.7 4.94-2.7 20.89 0 12.92.34 15.62 2 18.54s5.06 4 13 4c8.43 0 12.13-1.12 13.59-4.15.9-1.8 1-2.92 1-7.64v-1.46zM227.05 200.21h33.14v14.94h-50.44v-74.93h17.3zM284.57 215.15h-17.3v-74.93h17.3zM369.49 215.15h-29.21l-16.51-36.28c-2-4.5-3-7-7.19-17.87l-2.36-5.95h-.67c.45 10.34.67 18.2.67 23.82v36.28h-17v-74.93h29l15.62 34.71c3.48 7.76 3.7 8.32 7.86 18.76l2.58 6.18h.72l-.23-5.84c-.45-8.42-.45-9.43-.45-17.41v-36.4h17.19zM399.37 215.15h-17.3v-74.93h17.3zM474.07 187.63V190c0 12-1.23 16.17-5.84 20.22a23.12 23.12 0 0 1-10.44 4.78c-2.48.45-8.65.67-16.29.67-14.27 0-18.31-.9-23.82-5.28-3.71-2.92-6.51-8.2-7.19-13.7-.56-4.83-1-14.72-1-25.17 0-13.93 1.69-20.1 6.74-24.93 5.84-5.62 11.57-7 29.43-7 10.45 0 13.93.45 18.09 2.36 5.17 2.36 8 6.29 9.1 12.81.45 2.47.56 4.38.78 11.34h-17.19c-.11-5.39-.34-6.51-1.24-8.2-1.46-2.58-4.38-3.37-12.24-3.37-7.42 0-10.9.79-12.92 2.81-2.36 2.47-2.7 4.94-2.7 20.89 0 12.92.34 15.62 2 18.54s5.05 4 13 4c8.42 0 12.13-1.12 13.59-4.15.9-1.8 1-2.92 1-7.64v-1.46z"
          transform="translate(-22.72 -93.35)"
        />
      </g>
      <g id="kettlebell-2" data-name="kettlebell">
        <path
          d="M23.51 154.49l-.79-.37.78-.28.14.39zm.7 7.41l-.13.26-.79-.37.11-.91.39-.14.26.12zm4.08 1.6l-.29.5-.8-.38.78-.27zm.59-19l-.79-.37.78-.28.13.39zm1.9 19.89l-2.23-.73a1.86 1.86 0 0 1 2.08-.3zm-1-4L29 160l.78-.28.14.38zm.39 5.33l-.25.53-.79-.37.78-.28zm-.09-14.85l-.79-.37.78-.28.14.39zm.36 4L30 155l-.26-.12-.28-.78.38-.14.27.13zm-.05 3.52l-.79-.37.77-.28.14.39zm0-4.82l-.79-.37.77-.28.14.38zm.07 14.2l-.79-.37.77-.28.14.39zm.49-1.06l-.79-.37.84-.34.14.39zm.34 8.86l-.79-.38.78-.27.14.38zm96.52-1.22l-.37.79c-.53-.25-.87-.2-1 .15l-.14-.39-.53-.24q-1.36 2.9 0 3.52l-.38.79-.52-.25-.62 1.32.79.37-.38.79-.52-.25-.48 1.71-1.14 1.72-.46 2.35-.13.27-.52-.25-.38.79a43.28 43.28 0 0 1-14.71 16.89l-.24 1.18-.12.26-.53-.25-.14-.39-.26-.12-5 3.12-.26-.13-.62 1.32.79.37 1.42-.29.53.24-.37.8c-.53-.25-.87-.2-1 .15l-.14-.39-.26-.12-2.34.18-.67-.63c-.17.35-.78.28-1.83-.22a44.92 44.92 0 0 1-19.08 2.92 62.22 62.22 0 0 1-14.28-3.18l-.12.26-.14-.38-2.5-1.13c-.42.66-.84.89-1.28.68l-.14-.39.39-.14.24-.52-1.45-1-.39.14-1.19-.89-1.06-.49-.12.26-.08 2.22L53 208l-.14-.39.39-.14.25-.52-.5-.25.88-1.19c-.87-.42-1.6 0-2.18 1.22l-.27-.12.14.38-.12.27-1.55.55-.26-.12.37-.79.53.25.12-.27.11-.91.26.12.1-1.56-.92-.11-.47 2.36h-1.3l-.14-.39.39-.14.25-.53c.36-1.11.35-1.76-.05-1.95l-2.21-.08-.28-.77-.78.27-.09 1.57-1 .15-.14-.38.39-.14.62-1.32c-.35-.17-.36-.6 0-1.3l-.67-.64-.9.54-.14-.38-.26-.13-1.44-.36 3.24-.72.66.63.38-.79-1.07-1.14-.39.14-.12.26-.67-.64-2.22-.08-.14-.38 1-1.46.29 1.43 1.57.09.5-1 .09-1.57-.26-.12-.39.13-.26-.12.14.39-.25.53-.53-.25c-.35-.17-.4-.51-.15-1l-.27-.12-.12.26-.23 1.18c-.36-.17-.41-.52-.16-1l-.79-.37-.77.27-.14-.38-.27-.13-1.44-.35c.17-.36.95-.42 2.34-.19l-.14-.39.37-.79.78-.28c.35.17.36.6 0 1.31a2.54 2.54 0 0 0 2-.05l-.14-.39.25-.53.67.64.91.11.14.39 1-.81.11-.91-.27-.13-1 .81-.14-.39-.26-.12-1.84-.32c.2-.44.68-.54 1.42-.3l.13-.26-.27-.12a5 5 0 0 0-2.85.59l-.28-.78-.26-.12-.89 1.19c-.87-.41-1.38-1.62-1.51-3.61l-.39.14-.26-.13q-5.19-10-5.33-16l-.53-.25-2.22-.08.13-.26-.19-.46.12-.26 2.34-.19c-.07-4.05-.25-6.18-.54-6.37l-1.44-.35c.19-.4.75-.46 1.69-.17l.69-4.19.63-.67c-.53-.24-.59-1.24-.2-3l.27.13c.24-.75.14-1.22-.3-1.43l1.29-.68.12-.27c-.35-.16-.32-.68.1-1.56l-.14-.39.38-.14.36-1.44 1.62-3.43-.14-.38.38-.14.87-1.85.2-1.12 5.81-7.57-1.01-.53.12-.27q2.23.73 3.72-2.43l5.36-3.87q6.42-5.58 21.31-8.31l.26.12.28.78-.25.52-.9.55-.23 1.17q-1.15-.45-13.07 3.83c-.35-.17-.74.19-1.15 1.07q-1.23.06-8.09 4.88l-.14-.39-.13.26-.11.92-.38.14-.27-.13-.14-.38-.12.26.14.39-.13.26-5.08 5.33.14.39a31.88 31.88 0 0 0-4.14 6.74l-1.62 3.43a43.79 43.79 0 0 0-2.9 9.58l-.39.14q.35.48-.08 7.69.16 5.29 3.5 15.81l2.12 1.64-.12.27c-.53-.25-1 .06-1.41.94l.52.25.25-.53.27.13.14.39.26.12-1.25 1.31.52.25.5-1.05a3.7 3.7 0 0 1 1.61 2l.27.13a1.72 1.72 0 0 0 1.67-.82l.26.12.14.39 1.57.09-.14-.39.12-.26.78-.28 1 2.06.39-.14-.13.27.39-.14.53.25.14.38.26.13-.39.14-.25.53.27.12.25-.53q4.15 2.75 3.44 4.28l.27.12.76-.93 1.33 1.28-.39.13-.12.27.28.77.91.11c1.94 2 2.92 3.36 3 4l-.12.27-.53-.25-.13.26a2 2 0 0 1 1.37 2.58l1 .49 1.44.36-.12.26.39-.14.26.13q16.86 7.93 38.9-2.61 11.6-6.85 16.41-17.06c.52.25.87.2 1-.15l.25-.53-.38.14-.27-.13.2-.9.39-.14 2.45-6.57.53.25.62-1.32-.39.14-.53-.25.25-.53 1-4.06 1.16-.42.13-.26-.8-.37-.24.52-.53-.24.12-.27.39-.14.11-.91-.26-.13-.78.28A1.59 1.59 0 0 1 122 169l1-.8.14.38.79.38a3.7 3.7 0 0 1 2.34-.19l.12-.26c-1.4-.66-2-1.26-1.73-1.79l.12-.26.9-.54.11-.92-.26-.12a1.71 1.71 0 0 1-1.68.82l-.26-.12-.28-.78-.39.14-.26-.12-1.2-.89-.35 1.44-1 .16-.67-.64 1.17-.41-.14-.39.37-.79 1 .49-.15-1 .12-.26.26.13c.62.5.81 1 .56 1.55l.53.24-.16-.45.12-.27.64-.66c-.4-.19-.45-.75-.17-1.69l.53.25.25-.53-.53-.25q-.37.8-.9.54l-1-.49.37-.8.38-.13.13-.27c-.31-.14-.34-1.66-.11-4.56-.66-.31-.85-1-.57-2.2-.53-.25-.58-.81-.17-1.69l-.26-.12-1.57-.09.12-.27 3.23-1.38a2.38 2.38 0 0 0 1.08 1.8l-.12.27-.78.27a1.38 1.38 0 0 0 .83 1.68l.62-1.32.26.13-.36 1.44-.39.14-.12.26.14.39.26.12-.38.14-.25.53.26.12.25-.52c.7.33.81 1 .31 2.07q.53.25.9-.54l.39-.14.26.12.14.39-.25.53-.54-.27.1 3.91-.24 1.18 1.44.35-.12.27-.45 3-.87 1.85.53.25c.33-.71.67-1 1-.81s.25 1.3-.31 3.4l-1 .15-.15-1h-1.31l-.21 1.83.26.13q.5-1.06 1-.81a3 3 0 0 1 .08 3.26l.14.38.26.13 1.16-.42zM31.5 184l-.79-.37.78-.28.13.39zm0-26.71l-.79-.37.77-.28.14.39zm2.13 2.3l-.24.52-.79-.37.77-.28zm-.23 17.59l-.79-.37.77-.28.14.39zm.21-24.37l-.79-.37.77-.28.14.39zm0-16.42l-.79-.37.78-.28.14.39zm.39 47.82l-.79-.37.78-.28.14.39zm.28 6.25l-.79-.37.77-.28.14.39zm.06-36.35l-.13.26-.52-.25.12-.26zm.19-3.13l-.8-.38.78-.28.14.39zm.6 37l-.79-.38.78-.28.14.39zm1.35-31.57l-.53-.25-.37.8.52.24zm2.14 35.78l-.39.14-1.05-.49.24-.53 1.18.23.14.39zm.9-6l-.26-.13-.62 1.32.77-.28zm.3-9.52l-.39.14-.26-.12-.16-1 .13-.27.26.13zm-.36 1.44l-.12.27-.28-.78.12-.26zm.58-8.74l-.79-.37.12-.27.78-.28.14.39zm0 23.84l-.8-.37.78-.28.14.39zm.42-9.78l-.78.28-.26-.13.77-.27zm.91-5.36l-.12.26-1.16.42.23-1.18zm-.58-2.86l-.27-.12-.28-.78.76-.31zm0 .66l-.25.52-.26-.12.25-.53zm.4-33l-.26-.12-.37.79.26.12zm.9 38.42l-.77.28-.28-.78.39-.14-.14-.39.37-.79c.35.17.32.69-.1 1.57zm.45-3l-.37.79-.78.28-.26-.13L42 178zm-.48 7.18l-.78.28.25-.53zm.48-1.71l-.12.27-1.06-.5.13-.26.63-.67zm.06-47.3l-.79-.37.78-.28.14.39zm-.51 5.88l-.12.26.28.78.12-.27zm1.55-.56l-.8-1-.78.28.42 1.16.39-.14.28.78zM43.45 199l-.25.52-.26-.12.24-.53zm.33-8.22l-.27-.12-.37.79.26.12zm1.13-1.78l-.27-.13-.66-.63.77-.28zm1.08 1.8l-.52-.25-.78.28.14.39.26.12.78-.28zm-.49-4.42l-.13.26-.26-.12.23-1.18c.36.21.41.55.16 1.08zm1.33 1.27l-.62 1.35-.77.28c-.36-.17-.41-.51-.16-1l.64-.67-.14-.39zm.73 8.71l-1.56-.05-.28-.78-.26-.12-.22 1.83 2.61-.06zm-1.36 9l-.2.64-.27-.12.25-.53zm.46-14l-.53-.24-.25.52.53.25zm2.54 8.28l-1.44-.35.14.38-.25.53-.53-.25-.14-.39-.26-.12-.13.26c-.19 1-.13 1.55.17 1.69.8-1.12 1.53-1.53 2.19-1.22zm-.48 1.71l-.27-.13c-.39-.07-1 .2-1.67.83l.26.12c.83.07 1.3 0 1.43-.3l-.14-.38zm-.1-65.41l-.26-.12-.25.53.26.12zm0 57.33l-.53-.25.28.78zm.2 3l-.26-.12-.25.53.26.12zm2.76 1l-.53-.25.39-.14.12-.26-1.19-.88-1-.5-.25.53c.7.33 1 .67.8 1l-.38.14.52.25.25-.53.79.37-.25.53.53.25zm-.06-2.6l-.39.14.12-.27-1.44-.35-.12.26a4.35 4.35 0 0 1 2.26 2l.91.11c.23-.29-.22-.93-1.3-1.81zm-.64 6.14l-.79-.38-.13.27.8.37zm.79-67.81l-.14-.38-.26-.13-.37.79zm.33 75.16l-.25.52-.26-.12.25-.53zm.42-76.76l-.53-.24-.25.52zm.79 67.35l-.13-.39-.27-.12-.9.54.53.25zm-.71 8.35l-.25.53-.26-.12.24-.53zm2-7.08l-.27-.13-.91-.1.14.38-.12.27-.39.14-.11.91.77-.28-.14-.39.13-.26.77-.28zm.19 8.46l-.24.53-.27-.12.25-.53zm4.72-4.54a4.09 4.09 0 0 1-1.74-1.78l-.38.14-.13.26-.66-.63.24-.53 1.59.74.12-.26-2.25-1.38-.77.28.25-.53-.27-.12-.25.52.14.39-.38.14.26.13.39-.14.14.38-.39.14-.37.79 1 .5 1.44.36-.12.26.39-.14.26.13.93.76.39-.14zm.12 5.21l-.25.53-.26-.13.25-.52zm3.94-4.26l-.53-.25.25-.53zm3 .45l-.53-.25.25-.53zm1.72-82.26L68 123l-.25.53.26.12zm3.12-.46l-.25.53.52.25zm7.16-.17l-.25.53a1 1 0 0 0-1.55.56l-1.43.29a4.74 4.74 0 0 1 .33-2.74l1-.16.79.38c.35.16.4.51.15 1l.39-.14zm-1.19-.88l-.27-.13-.25.53.27.13zm44.55 27.75c-.18.39-.75.45-1.69.17l.13-.26q-4.6-10.23-11.84-15.88l-6.43-4.67-.92-.11A46.09 46.09 0 0 0 85.86 124l.09-1.57-.26-.13c-.58 1.23-1.4 1.6-2.45 1.1-.17.36-.69.32-1.57-.09l-.14-.39-.26-.12c-.2.44-.77.49-1.69.17l-.66-.64.12-.26c.53.25.87.2 1-.15l-.28-.78.25-.53 4 .3-.01 1.54-.39.14.14.39.27.13.77-.28.13-.27-.16-1 .13-.26.77-.28.14.39.26.12q1.53-1.53 15.21 4l-.13.26.39-.14a41.51 41.51 0 0 1 21 21.79l-1.15 1.07.26.12zm-40.57-27.19L81 122l-.24.53.26.13zm10.44 95.39l-1.43.29c-.39-.18-.45-.75-.17-1.69l.53.25-.37.79.53.25c.24-.53.54-.71.89-.54l.14.39zm-.51-5.07l-.25.53-.79-.38.25-.52zm.56 1.55l-.64.67-.28-.78.13-.26zm.09-1.57l-.39.14-.26-.12-.14-.39.13-.26.38-.14.27.12.14.39zm1.07 1.15l-.25.53-.28-.78zm.23 4.3l-.25.52-.26-.12.25-.53zm.89-1.2l-.13.27-.77.28.37-.8zm.71 2.59l-.39.14-.26-.12-.16-1 .78-.28.26.12zm.37-6.26l-.49 1.05-.27-.12-.28-.78.25-.52zm1.81 5l-.86 1.84-.42-1.16-.27-.12 1-.81zm-.35-4l-.75 1.58-.27-.78.49-1zM98 208.9l-1.16.42.26.12.78-.27zm-.09 7l-.38.79-.27-.77.12-.27zm-.1 1.57l-.24.52-.28-.77.24-.53zM99.07 126l-.53-.25-.37.79.53.25zm.1 93.42l-.37.79-.28-.78.12-.26zm1-6.93l-.37.79-.28-.77.13-.27zm1.54-84.6l-.53-.25-.12.27.52.25zM104 220.1l-.37.79-.28-.78.12-.26zm5-9.89l-.37.79c-.53-.25-.88-.2-1 .15l-.14-.38-.53-.25a.78.78 0 0 1-1.16.42l-.39.13-.12.27-.14-.39-.27-.12-1 .15-.13-.39.12-.26 4.68-.37zm-2.64 9.7l-.37.79-.28-.77.12-.27zm.32-25.28l-.25.52-.26-.12.25-.53zm1.68 10.77l-.12.27-.53-.25-.28-.78.27.13-.14-.39.12-.26.78-.28.26.12zm2.7-7.1l-.24.53.52.25zm9.52-44.13a1.9 1.9 0 0 1-2.2.57l.13-.26c.16-.35.51-.4 1-.15l.38-.14.13-.27-.28-.77.79.37-.25.53zm-.35 6.91l-.39.15-.53-.25.25-.53-.26-.12-.38.79-.26-.13.09-1.56 1.44.35-.12.27zM119.6 174l-.77.28.25-.53zm1.18-16.84l-.25.53-1.6-1.4.25-.52.26.12.14.39.39-.14.53.25zm.39 27.88l-.79-.38-.38.8.79.37zm.52-16.82l-.78.28.14.38-.37.79-.53-.24.39-.14.12-.27-.28-.77.78-.28-.14-.39.12-.26.27.12zm1 3.36c-.71-.33-1.14-.32-1.31 0l-.52-.25.74-1.58c.86.92 1.22 1.52 1.08 1.83zm-1-25.25l-.52-.25-.25.53.53.24zm.35 20.45l-.52-.25.24-.53zm.29 23.31l-.37.79-.28-.77.12-.27zm.74-1.58l-.25.53-.79-.38.5-1 .26.12zm-.23-37.78l-.26-.12-.25.52.26.13zm.3 18.5l-.52-.25-.25.52zm-.26-16.55l-.26-.12-.25.53.27.12zm.44-3.65l-.93-.76.12-.27 1.17-.42.14.39zm0 16.41l-.77.28.25-.53zm.24-12.12l-.26-.12-.25.52.26.13zm.49 4.42l-.77.28-.12.26 1.17.23zm-.36 17.86l-.26-.13-.25.53.26.12zm.2-19.55l-.53-.25.28.78zm.26-10.82l-.79-.37.13-.27.77-.28.14.39zm-.26 27.89l-.26-.13-.25.53.27.12zm1.48-9.29l-1.44-.36-.12.27 1.31.62zm-.18 20.2l-.37.79-.28-.77.13-.27zm-.08-25.8l-.26-.12-.25.53.26.12zm.84-8.61l-.37.79-.53-.25.37-.79zm.34 14.32l-.67-.64-.26-.12-.13.26.67.64.26.12zm1.32-10.32l-.79-.38.12-.26.78-.28.14.39zm.13 5.86l-.66-.64.12-.26.78-.28.14.39zm.58 2.2l-.38.79-.52-.25.11-.91zm1.95 5.42l-.13.27-.52-.25q-.37.8-.9.54l-.27-.12-.27-.78.24-.52.78-.28.79.37zm-.87-9.1l-.37.79-.53-.24.38-.79zm.27 5.6l-.38.79-.52-.25.37-.79zm.65 22.53l-.37.79-.28-.78.13-.26zm2.64-9.71l-.37.79c-.53-.25-.87-.19-1 .16l-.14-.39-.26-.12-1 .15-.14-.39.13-.26 2.34-.19zm-.63-4.8l-.13.26-.52-.25-.28-.77.26.12-.14-.39.13-.26.77-.28.27.12zm.79-10.58l-.12.27-.79-.37.37-.8.26.13zm.55.9l-.13.27-.77.27.12-.26zm1.13 3.75l-.38.8-.52-.25.37-.79z"
          transform="translate(-22.72 -93.35)"
          fill="#b44cff"
          id="bell"
        />
        <path
          d="M63 104.32c.33.14.39.61.17 1.39l-.22-.1a33.92 33.92 0 0 0-12.8 10.09l-3.71 5.45-.07.76a38.09 38.09 0 0 0-3.46 12.64l-1.29-.05-.1.22c1 .45 1.35 1.12 1 2 .29.13.28.56 0 1.29l-.32.12-.1.22c.37.17.43.63.18 1.39l-.51.57-.22-.1c.19-.44.14-.72-.15-.85l-.63.24-.44-.19.15-3.34h1.3l.12.32.32-.12.09-.22-.24-.64-.22-.09-.86.15-.22-.1-.24-.63.31-.13.1-.22q-1.29-1.22 2.92-12.61l.22.1-.12-.32a34.21 34.21 0 0 1 17.5-17.74l.91.92.1-.22zm-21.21 36.3l.44.19a.85.85 0 0 0 .49 1.27l.28 1.17a3.87 3.87 0 0 1-2.27-.21l-.15-.85.29-.66c.13-.29.41-.35.85-.15l-.12-.32zm66.36-20.91q-5.9-9.4-14.41-13.15c.2-.44.14-.72-.15-.85l-.44-.2.13.32-.1.22-.76-.07-.12-.32-5.47-1.88.2-.44-1.1-.48.12.32-.19.44-.44-.2-3.37-.69-.37-1-.22-.09-.29.65.44.2-.19.44-.22-.1-.12-.32-.76-.07-.1.22.25.64a1.32 1.32 0 0 1-1.27.49l-.68-.83.31-.12.29-.66a3.09 3.09 0 0 1-.2-1.92l-.22-.1c-.51 1.17-1 1.66-1.43 1.47l-.22-.1-.47-.73-.75-.07-.1.22a1.39 1.39 0 0 1 .71 1.36l-.09.22-.63.25.12.32-.1.22-.7 1 1.19.26.15.85-.51.57-.37-1-.31.12-.66-.29.38-.88-.85.15-.22-.1.1-.22c.4-.52.82-.68 1.26-.49l.2-.44-.32.13-.22-.1-.56-.51c-.15.33-.61.39-1.39.18l.19-.44-.44-.2-.19.44c.44.2.6.44.47.73l-.39.88-.66-.29-.12-.32-.22-.09c-.11.25-1.36.32-3.75.18-.25.55-.85.73-1.81.52q-.29.66-1.38.18l-.1.22v1.29l-.22-.1-1.23-2.55a2 2 0 0 0 1.46-.94l.22.1.25.63a1.13 1.13 0 0 0 1.36-.71l-1.1-.48.1-.22 1.19.26.12.32.22.09.32-.12.1-.22.12.32.44.19.14-.22-.44-.19c.26-.59.82-.69 1.7-.3.13-.29 0-.54-.46-.73l-.13-.32.1-.22.32-.12.44.19-.2.44 3.22-.16 1 .17.26-1.2.22.1 2.48.31 1.54.67.2-.43c-.59-.26-.82-.54-.69-.83s1.06-.23 2.8.18l.15.86-.85.15.05 1.07 1.52.14.09-.22c-.58-.26-.81-.53-.68-.83a2.5 2.5 0 0 1 2.68-.13l.31-.12.1-.22-.37-1 .19-.44.66.29c-.19.44-.14.72.15.85l-.31.12-.2.44c1.61.71 2.58.7 2.9 0l.66.29-.19.44 1.1.48.29-.66.66.29-.2.44 1.42.36 1.44.9 1.95.33.22.1-.19.43.66.3A35.68 35.68 0 0 1 108.74 116l1 .17.22.09-.2.44-.31.13-.1.21 2.67 4.06-.09.22 1.1.49.28-.66L113 120l.2-.44.65.29c-.19.44-.14.72.15.85l-.31.12-.1.22.2 1.93-.51.56c.3.13.25.63-.14 1.51a37.12 37.12 0 0 1 2.86 15.68m-74.87.9l-.1.22.44.2.1-.22zm.38-3.24l-.1.22.44.19.1-.22zm2.81-14.76l-.19.44.66.29.19-.44zm1.51-2.22l-.2.44.22.1.2-.44zm13.77-18.85l-.29.66-.22-.1-.25-.63.32-.12zm1 2l-.2.44.44.19.2-.44zm2.19-1.4l-.61.78-.22-.1-.37-.94.32-.13zm.42-2.17l.67.29-.2.44-.66-.29zm1 2.53l-.1.22.44.19.1-.22zm1.61-.08l-.1.22.44.19.1-.22zm.66-3.9l-.28.66-.22-.1-.25-.63.31-.13zm-.15 3.34l-.1.22.44.19.1-.22zm.67 2.43a1.56 1.56 0 0 1 .52 1.8l-.22-.09c-.29-.13-.34-.42-.15-.86l-.12-.31-.22-.1-.63.25.29-.66.44.19zm1.48-2.76l-.19.44.63-.25zm1 2.53l.44.2-1.11 1.34-.44-.19.1-.22.31-.13-.12-.31.19-.44zM70 98l.66.29-.19.44-.66-.29zm-.1 4.42l.24.63.22.09.17-1zm.38-.88l-.09.22.44.19.09-.22zm1-2.2l-.51.56-.22-.1-.25-.63.3-.17zm1.49 6.16l.12.31-.19.44-.44-.19-.1.22.66.29-.1.22h-1.29l.26-1.2.22.1zm-.31-10.63l.22.1-.29.66-.66-.29.09-.22zm.62 4l.66.29-.19.44-.76-.07zm.11-4.41l.22.09.24.64-.22-.1zm1.8 6l-.51.57-.1.22.22.09.51-.56.1-.22zm-.35-2.77l.66.29-.2.44-.66-.29zm.28 3.53l-.26 1.2.22.09.48-1.1zm1.33-7.8l.66.29-.19.44-.72-.36zm0 9.45l.25.64-.44-.2zm1.22-5.75l.22.09-.19.44c.44.19.59.44.46.73l-.09.22-.64.25-.44-.2-.22-.65.29-.66zm-.09 6.77l-.2.44-.44-.19zm1.19.27l.25.63.31-.13.66.29-.19.44-.1-.39-.22-.1-.64.25-.24-.63-.32.12-.22-.1.1-.22zm.8-1.23l-.19.44.44.2zm1.77-7.61l.22.1-.19.44-.63.24.09-.22-.31.13-.22-.1-.25-.63L80 95zm.18 8c-.26.58-.24.94.06 1.07l-.2.44-1.32-.58c.74-.86 1.23-1.17 1.48-1.05zm1.24-1l-.1.22.44.19.1-.22zm.82 3.5l.25.64-.44-.2zm1.23-3.39l-.1.22.44.19.1-.22zm.48-7.65l.66.29c-.19.44-.14.72.15.85l-.32.12-.09.22.15.85-.32.13-.22-.1-.2-1.92zm6.44 6.23l.65.29-.63.25-.22-.1zm.91 3.29l-.29.66.66.29.29-.66zm.7-7.56l.66.29-.63.25L93 97zm2.12 5.92l.44.19-.29.66-.88-.39.1-.22zm1.32.58l.66.29-.63.24-.22-.09zm4.07 12.8l.44.19-.09.22-.44-.19zm2.94-3.69l.44.19.19-.44zm5.9 2.07l.22.1-.19.44-.63.24.09-.22-.31.13-.22-.1-.25-.63.1-.22zm3.11 8.45l.37 1 .09-.22-.24-.64zm.84-9.07l.66.29c-.19.44-.15.72.15.85l-.32.12-.19.44a.64.64 0 0 1 .37 1l.12.32.22.09-.32.13-.09.22.15.85-.32.12-.22-.09-.4-3.86zm2.2 14.08l.12.31-.09.22-.32.13-.22-.1-.13-.44.09-.22.32-.12zm-.12-6.88l.65.29-.63.25-.22-.1zm.15 7.41l.44.19-.29.66-.44-.19zm.37-3.24l.88.38-.09.22-.64.25-.43-.19zm.52 1.8l.44.19-.63.25zm.37 1l.57.51-.64.24-.22-.09zm-.09-4l1.32.58-.63.24-.88-.39zm1.56-1.16l.66.29-.63.25-.22-.1zm1.43 5.09l.28 1.17c-.15.33-.61.39-1.39.18l.19-.44.66.29.19-.44c-.44-.19-.59-.44-.46-.73l.31-.12zm-.74-1.9l.22.1.25.63-.66-.29zm.6-3.14l.44.19-.63.25-.44-.2zm.47.73l1.54.67-1 .37-.1.22-.69-.82zm-.06 3.12l.44.19-.1.22-.44-.19zm1.11-1.35l.13.32-.1.22-.85.15-.25-.64.1-.21zm0-3.65l.66.29-.64.24-.22-.09zm.24-5.93l.66.29-.63.25-.22-.1zm.2 1.93l.66.29-.63.24-.22-.09z"
          transform="translate(-22.72 -93.35)"
          fill="#b44cff"
          id="handle"
        />
        <path
          d="M53.85 161.73l-.38-.17.37-.14.07.19zm.33 3.55l-.06.12-.38-.18.06-.43.18-.07.13.06zm2 .76l-.12.25-.38-.18.32-.11zm.28-9.1l-.37-.18.37-.13.06.19zm.91 9.51l-1.07-.35a.89.89 0 0 1 1-.15zm-.48-1.92l-.38-.18.37-.13.07.18zm.19 2.55l-.12.25-.38-.18.37-.13zM57 160l-.37-.18.37-.13.06.18zm.17 1.93L57 162l-.13-.06-.13-.37.18-.06.13.06zm0 1.68l-.38-.18.37-.13.07.18zm0-2.31l-.38-.17.37-.14.07.19zm0 6.79l-.37-.18.37-.13.06.18zm.24-.5l-.38-.18.37-.13.07.18zm.16 4.23l-.38-.18.37-.13.07.18zm46.13-.59l-.18.38c-.25-.12-.42-.09-.5.08l-.06-.19-.25-.12q-.66 1.39 0 1.68l-.17.38-.26-.12-.29.63.38.18-.18.38-.25-.12-.23.81-.55.83-.22 1.12-.06.13-.25-.12-.18.38a20.72 20.72 0 0 1-7 8.07l-.11.56-.06.13-.25-.12-.13-.18-.13-.06-2.39 1.48-.13-.05-.25.63.37.17.63-.17.25.12-.18.38c-.25-.12-.42-.1-.5.07l-.06-.18-.13-.06-1.12.09-.32-.31c-.07.17-.37.14-.87-.1a21.57 21.57 0 0 1-9.12 1.4 29.78 29.78 0 0 1-6.82-1.53l-.06.13-.07-.18-1.13-.54c-.2.32-.41.43-.62.33l-.06-.19.18-.07.12-.25-.7-.48-.18.07-.57-.42-.51-.24-.06.12v1.06l-.5.08-.07-.19.19-.06.12-.26-.25-.12.42-.56c-.42-.2-.77 0-1.05.58l-.12-.06.06.19-.06.12-.74.27-.12-.06.18-.38.25.12.06-.13v-.43l.13.06v-.75l-.44-.05-.22 1.12h-.62l-.07-.19.19-.07.12-.25q.26-.79 0-.93h-1.06l-.13-.37-.37.13v.75l-.49.08-.07-.19.19-.07.29-.63c-.16-.07-.17-.28 0-.62L64 184l-.43.26-.06-.19-.13-.06-.69-.17 1.55-.34.32.3.17-.38-.51-.55-.22.13-.06.13-.32-.31h-1.06l-.07-.18.49-.7.14.68.75.05.23-.5.05-.75-.15-.12-.18.06-.13-.06.07.19-.12.25-.26-.12c-.16-.08-.19-.24-.07-.49l-.12-.06-.06.12-.11.57c-.17-.08-.2-.25-.08-.5l-.38-.18-.37.14-.06-.19L62 181l-.69-.17c.08-.17.45-.2 1.12-.09l-.07-.18.18-.38.37-.13c.17.07.18.28 0 .62a1.2 1.2 0 0 0 .93 0l-.07-.19.12-.25.32.3.44.05.06.19.49-.39.06-.43-.13-.06-.49.38-.07-.18-.12-.06-.88-.11c.1-.21.33-.25.69-.14v-.12l-.12-.06a2.36 2.36 0 0 0-1.36.28l-.14-.37-.12-.06-.43.57c-.42-.2-.66-.77-.72-1.73l-.19.07-.12-.06q-2.48-4.78-2.55-7.66l-.25-.12H57.2l.06-.12-.07-.19.06-.12 1.12-.09a9.42 9.42 0 0 0-.26-3l-.68-.17c.08-.19.35-.21.8-.08l.33-2 .3-.32c-.25-.12-.28-.59-.09-1.43l.12.06c.12-.35.07-.58-.14-.68l.62-.33.06-.12c-.17-.08-.16-.33 0-.75l-.06-.19.18-.06.17-.69.77-1.64-.06-.18.18-.07.42-.88.11-.56 2.78-3.62-.51-.24.06-.12c.71.23 1.31-.16 1.78-1.16l2.75-2.01q3.08-2.67 10.18-4l.13.06.13.38-.12.25-.43.26-.11.56c-.36-.15-2.45.46-6.24 1.83-.17-.08-.35.09-.55.51-.39 0-1.68.79-3.87 2.33l-.07-.19-.06.13v.44l-.18.06-.13-.06-.07-.18-.05.13.06.18-.06.13-2.56 2.56.07.19a15 15 0 0 0-2 3.22l-.77 1.64a20.29 20.29 0 0 0-1.3 4.58l-.19.06a16.48 16.48 0 0 1 0 3.68 30.45 30.45 0 0 0 1.67 7.56l1 .78-.06.13c-.25-.12-.47 0-.67.45l.25.12.12-.25.13.06.06.18.13.06-.61.64.25.12.24-.51a1.84 1.84 0 0 1 .77 1l.13.06a.82.82 0 0 0 .8-.39l.12.06.07.18h.75l-.07-.19.06-.12.37-.14.46 1 .18-.07-.06.13.19-.07.25.12.07.18.12.06-.18.07-.12.25.13.06.11-.25c1.35.84 1.91 1.51 1.67 2l.13.06.36-.44.64.61-.19.07-.06.12.14.37h.43c.93 1 1.4 1.61 1.42 1.9l-.06.13-.25-.12-.06.12a1 1 0 0 1 .65 1.23l.5.24.69.17-.06.13.19-.07.12.06q8.06 3.8 18.59-1.24a19 19 0 0 0 7.84-8.16c.26.12.42.1.5-.07l.12-.25-.19.06-.12-.06v-.44l.18-.06 1.18-3.14.25.12.29-.63-.18.06-.25-.12.12-.25.45-1.94.55-.2.06-.12-.37-.18-.12.25-.25-.12v-.12l.19-.07v-.44l-.12-.06-.37.14a.75.75 0 0 1-.27-.75l.49-.38.07.18.37.18a1.83 1.83 0 0 1 1.12-.09l.06-.12c-.67-.32-1-.6-.83-.85l.06-.13.43-.26v-.44l-.12-.06a.81.81 0 0 1-.8.4l-.13-.06-.13-.37-.19.06-.12-.06-.57-.42-.17.69-.5.07-.32-.3.56-.2-.07-.18.18-.38.5.24-.07-.5.06-.13.12.06c.3.24.39.49.27.74l.25.12-.07-.18.06-.13.31-.32c-.19-.09-.22-.36-.08-.8l.25.11.12-.25-.25-.12c-.12.26-.27.34-.43.26l-.51-.24.18-.37.18-.07.06-.13c-.14-.06-.16-.79-.05-2.17-.31-.15-.4-.5-.27-1.06-.25-.12-.28-.38-.08-.8l-.13-.06h-.75l.06-.12 1.54-.66a1.16 1.16 0 0 0 .52.86l-.06.12-.37.14a.67.67 0 0 0 .39.8l.3-.63.13.06-.17.69-.19.06-.06.13.07.18.12.06-.18.07-.12.25.13.06.12-.25c.33.16.38.49.14 1 .17.08.32 0 .43-.26l.19-.06.12.06.07.18-.12.25-.25-.12.05 1.87-.12.56.69.17-.06.13-.21 1.44-.42.88.25.12c.16-.34.32-.47.49-.39s.12.62-.15 1.63l-.49.07-.08-.5h-.62l-.1.87.12.06c.16-.34.32-.46.49-.39a1.45 1.45 0 0 1 0 1.56l.07.19.12.06.56-.2zm-46 4.63l-.38-.18.37-.13.07.19zm0-12.76l-.38-.18.37-.13.07.18zm1 1.09l-.12.26-.38-.18.37-.13zm-.11 8.41l-.38-.17.37-.14.07.19zm.1-11.64l-.38-.18.37-.13.07.18zm0-7.85l-.38-.18.37-.13.07.18zm.16 22.85l-.38-.18.37-.13.07.18zm.13 3l-.37-.17.37-.14.06.19zm0-17.37l-.06.13-.25-.12.06-.13zm.09-1.5l-.38-.17.38-.14.06.19zm.29 17.68l-.38-.18.37-.13.07.19zm.64-15.12l-.26-.12-.17.38.25.12zm1 17.1l-.19.06-.5-.23.12-.25.56.11.07.18zm.43-2.88l-.13-.06-.29.63.37-.13zm.14-4.55l-.18.07-.13-.06-.07-.49.06-.13.12.06zm-.17.69l-.06.13-.13-.37.06-.13zm.28-4.18l-.38-.17.06-.13.37-.13.07.18zm0 11.4l-.37-.18.37-.13.06.18zm.21-4.68l-.37.14-.13-.06.37-.13zm.43-2.56v.13l-.56.2.11-.57zm-.28-1.36l-.12-.06-.14-.37.38-.13zm0 .31l-.12.25-.12-.06.11-.25zm.19-15.76l-.12-.06-.18.38.12.06zm.43 18.36l-.37.13-.13-.37.18-.06-.06-.19.18-.38c.16.08.15.33 0 .75zm.34-1.44l-.18.38-.37.13-.13-.06.43-.57zm-.23 3.43l-.37.14.12-.25zm.23-.81l-.06.12-.51-.23.06-.13.31-.32zm0-22.61l-.38-.17.37-.14.07.19zm-.25 2.81l-.06.13.14.37.06-.13zm.74-.26l-.38-.49-.37.13.2.56.18-.07.14.37zM63.38 183l-.12.26-.13-.06.12-.26zm.15-3.92l-.12-.06-.18.38.13.05zm.54-.82l-.12-.06-.32-.31.37-.13zm.52.85l-.25-.11-.37.13.07.18.12.06.37-.13zm-.23-2.11l-.06.13-.13-.06.11-.56c.17.07.19.23.08.49zm.63.61l-.29.63-.37.13c-.17-.08-.2-.24-.08-.49l.31-.32-.07-.19zm.35 4.17l-.75-.05-.13-.37-.13-.06-.1.87h1.24zm-.65 4.31l-.11.25-.13-.06.12-.25zm.22-6.67l-.25-.12-.12.25.25.12zm1.21 4l-.68-.17.06.18-.12.25-.25-.12-.06-.18-.13-.06-.06.12c-.09.47-.07.74.08.81.38-.54.73-.73 1.05-.58zm-.23.81l-.12-.06c-.19 0-.46.09-.8.39l.12.06c.4 0 .63 0 .69-.14l-.07-.18zm0-31.26l-.13-.06-.12.25.13.06zm0 27.4l-.26-.12.14.37zm.09 1.43l-.12-.06-.12.25.12.06zm1.32.47l-.3-.17.18-.07.06-.12-.57-.43-.5-.23-.12.25c.34.16.47.32.39.49l-.19.06.25.12.12-.25.38.18-.12.25.25.12zm0-1.25l-.18.07.06-.13-.69-.17-.06.13a2.13 2.13 0 0 1 1.08 1h.44c.05-.22-.18-.52-.7-.92zm-.3 2.94l-.38-.18-.06.12.38.18zm.36-32.45l-.07-.19-.13-.06-.17.38zm.15 35.92l-.11.25-.13-.06.12-.25zm.2-36.68l-.25-.12-.12.25zm.29 32.13v-.18l-.13-.06-.43.26.25.12zm-.34 4l-.12.25-.12-.06.11-.25zm1-3.39l-.13-.06-.43-.05.06.19-.06.12-.18.07v.44l.37-.14-.07-.18.06-.13.37-.13zm.09 4l-.11.25-.13-.06.12-.25zm2.25-2.12a2 2 0 0 1-.83-.85l-.19.06-.05.13-.32-.31.11-.25.76.36.06-.13-1.07-.66-.38.13.12-.25-.12-.06-.12.26.07.18-.19.07.13.06.18-.07.07.19-.19.06-.18.38.51.24.69.17-.06.12.18-.06.13.06.44.36.19-.07zm.06 2.49l-.12.25-.13-.06.12-.25zm1.88-2l-.25-.12.12-.25zm1.44.22l-.26-.12.12-.25zm.82-39.31l-.13-.06-.12.25.13.06zm1.49-.23l-.12.26.25.11zm3.42-.08l-.12.25a.5.5 0 0 0-.74.27l-.68.14a2.25 2.25 0 0 1 .16-1.31l.49-.07.38.17c.17.08.19.25.07.5l.19-.07zm-.57-.42l-.13-.06-.11.25.12.06zm21.3 13.26c-.09.19-.36.22-.81.08l.06-.12a19.66 19.66 0 0 0-5.66-7.59l-3.1-2.23-.44-.05a22.11 22.11 0 0 0-7.27-2.2v-.75l-.12-.06c-.28.59-.67.77-1.18.53-.08.17-.33.15-.74-.05l-.07-.18-.13-.06c-.1.21-.37.24-.81.08l-.31-.3.06-.13c.25.12.41.09.49-.07l-.13-.37.12-.26 1.93.15v.74l-.19.07.07.19h.12l.37-.13.06-.12-.07-.5.06-.13.37-.13.07.19.12.06c.49-.49 2.91.13 7.27 1.88l.02.16.18-.07a19.76 19.76 0 0 1 10 10.41l-.54.51.12.06zm-19.43-13l-.12-.06-.12.25.13.06zm5 45.59l-.68.14q-.29-.13-.09-.81l.25.12-.17.38.25.11c.12-.25.26-.33.43-.25l.07.18zm-.25-2.43l-.12.25-.37-.17.12-.25zm.27.74l-.3.32-.14-.37.06-.12zm0-.74l-.18.06-.13-.06-.06-.18.06-.13.18-.06.13.06.06.18zm.57.54l-.11.26-.14-.37zm.12 2.06l-.12.25-.13-.06.13-.25zm.42-.57l-.06.12-.37.14.18-.38zm.34 1.23l-.19.07-.12-.06-.08-.5.37-.13.13.06zm.18-3l-.24.5-.13-.06-.13-.37.12-.25zm.86 2.41l-.41.88-.2-.56-.13-.05.49-.39zm-.17-1.93l-.35.76-.14-.37.24-.51zm.69-2.44l-.55.2.11.04.37-.14zm0 3.36l-.18.38-.13-.37.06-.13zm0 .75l-.12.25-.13-.37.12-.25zm.6-43.73l-.34-.14-.17.38.25.12zM90 192.77l-.18.38-.13-.37.06-.13zm.48-3.31l-.18.37-.13-.37.06-.12zm.74-40.46l-.25-.12-.06.12.25.12zm1.1 44.06l-.18.38-.14-.34.06-.13zm2.38-4.73l-.18.38c-.25-.12-.42-.09-.5.07l-.06-.18-.25-.12a.37.37 0 0 1-.56.2l-.19.07v.12l-.07-.18-.13-.06-.49.07-.07-.18.06-.13 2.24-.18zM93.44 193l-.18.38-.13-.37.06-.13zm.15-12.08l-.12.25-.12-.06.11-.25zm.81 5.15l-.06.12-.26-.12-.08-.37.13.06-.07-.18.06-.13.37-.13.13.06zm1.29-3.4l-.12.25.25.12zm4.55-21.09a.94.94 0 0 1-1.06.28l.06-.13c.08-.17.25-.19.5-.07l.18-.07.06-.13-.13-.37.38.18-.12.25zm-.18 3.31l-.18.06-.25-.12.11-.25-.12-.06-.18.38-.12-.06v-.75l.69.17-.06.13zm-.29 6.17l-.37.13.12-.25zm.56-8.05l-.12.25-.76-.66.12-.26.12.06.07.19.19-.07.25.12zm.19 13.32l-.38-.18-.18.38.38.18zm.25-8l-.37.14.06.18-.18.38-.25-.12.19-.07.06-.12-.14-.37.37-.13-.06-.19.06-.13.12.06zm.47 1.61c-.34-.16-.54-.15-.62 0l-.25-.12.35-.76c.42.41.59.69.52.84zm-.47-12.07l-.25-.12-.12.26.25.11zm.17 9.77l-.26-.11.12-.26zm.13 11.15l-.17.38-.14-.37.06-.13zm.36-.76l-.12.25-.38-.17.24-.51.13.06zm-.11-18.05l-.13-.06-.12.25.13.06zm.14 8.84l-.25-.12-.12.25zm-.12-7.91l-.13-.06-.11.25.12.06zm.21-1.75l-.45-.36.06-.13.56-.2.06.19zm0 7.85l-.37.13.12-.25zm.12-5.8h-.13l-.12.25.13.06zm.23 2.12l-.37.13-.06.13.57.11zm-.17 8.53l-.12-.06-.12.25.12.06zm.09-9.34l-.25-.12.13.37zm.13-5.17l-.38-.18.06-.13.37-.13.07.19zm-.12 13.33l-.13-.06-.12.25.13.06zm.7-4.44l-.69-.17v.12l.62.3zm-.08 9.65l-.18.38-.13-.37.06-.13zm0-12.33l-.13-.05-.12.25.13.06zm.4-4.12l-.18.38-.25-.12.18-.37zm.16 6.85l-.32-.3-.12-.06-.06.12.31.31.13.06zm.63-4.93l-.38-.18.06-.13.37-.13.07.18zm.07 2.8l-.32-.31.06-.12.37-.14.06.19zm.27 1l-.18.38-.25-.12v-.44zm.93 2.59l-.06.13-.25-.12c-.12.25-.26.34-.43.26L104 168l-.14-.37.12-.25.37-.14.38.18zm-.41-4.35l-.18.38-.25-.12.18-.38zm.13 2.68l-.18.38-.25-.12.17-.38zm.31 10.76l-.18.38-.13-.37.06-.13zm1.26-4.63l-.18.37c-.25-.12-.41-.09-.49.08l-.07-.19-.13-.06-.49.08-.07-.19.06-.12 1.12-.09zm-.3-2.3l-.06.12-.25-.11-.14-.37.13.05-.07-.18.06-.13.37-.13.13.06zm.38-5l-.06.12-.38-.18.18-.37.13.06zm.26.43l-.06.12-.37.13.06-.12zm.54 1.79l-.18.38-.25-.12.18-.38z"
          transform="translate(-22.72 -93.35)"
          fill="#b44cff"
          id="center"
        />
      </g>
    </svg>
  );
};

export default KettlebellClinicLogo;