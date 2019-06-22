import React, { Component } from "react";

class FollowFacebook extends Component {
  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        id="follow-me-facebook"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 600 280"
      >
        <path fill="#3b5998" d="M0 0h600v280H0z" id="background" />
        <g id="fit-womens-weekly" fill="#f8f8f8">
          <path d="M58.16 123.49v12.33c0 2.67.55 3.58 2.31 3.58 2.36 0 3-1.82 3-8.93 0-11-.36-11.35-12.63-11.35-10.32 0-13.23.49-15 2.61-1.46 1.76-2 4.68-2 10.93 0 5.89.43 10.38 1.09 12.39 1.16 3.15 4 4.06 12.69 4.06 8.5 0 11.36-.6 12-2.42l4.32 1.7c-1.83 4.06-5.1 5-16.52 5-8.56 0-12.26-.91-14.93-3.76-2.31-2.37-3.1-6.62-3.1-16 0-9.53 1-13 4.37-15.78 2.91-2.31 6.74-3 16.7-3 9.47 0 12.69.73 14.87 3.28 1.88 2.25 2.61 5.59 2.61 12 0 10.69-1.76 13.6-8.19 13.6-4.62 0-6.56-1-6.74-3.58h-.19c-.72 2.61-2.67 3.7-6.31 3.7-5.77 0-7.59-2.3-7.59-9.53 0-6.31.12-7 1.28-8.62s3.21-2.49 6.25-2.49c3.22 0 4.74.79 5.65 2.91l.18.07v-2.8zm-13.78 8.93c0 6.37.42 7.16 3.88 7.16 2.37 0 3.4-.48 3.83-1.82a15.41 15.41 0 0 0 .3-4.37c0-2.61-.18-3.58-.67-4.37s-1.82-1.4-3.52-1.4c-2.91 0-3.82 1.15-3.82 4.8zM83.66 130.54h17.24v7.71H83.66v15.66h-9.35v-40.5h27.75v7.71h-18.4zM114.39 119.79h-8.08v-6.38h8.08zm0 34.12h-8.08v-28.35h8.08zM140.62 131.51h-10.81v12.81c0 3.15.48 3.88 2.49 3.88 2.37 0 3-.91 3-4.61a6.75 6.75 0 0 0-.06-1h6.62v1.27c0 3.52-.18 4.8-.73 6.13-1.27 3.1-3.82 4.19-9.89 4.19-4.8 0-7.23-1-8.63-3.46-.66-1.15-.85-2.36-.85-5v-14.2h-3.58v-5.95h3.58v-6.14h8.08v6.14h10.81zM192.83 153.91h-13.54l-4.19-16.64c-.91-3.82-1-3.94-1.88-8.56l-.6-2.85h-.37l-.61 2.85c-.91 4.19-1 4.68-2.06 8.56l-4.37 16.64h-13.36l-9.59-40.5h9.41l4.33 18.82c.79 3.59 1 4.38 2.06 10.33l.61 3.46h.37l.78-3.46c.25-1.1.55-2.25.79-3.4.19-1 1-3.83 1.77-6.93l5-18.82h10.14l4.86 18.89c1 3.7 1.52 5.95 2.13 8.92l1.09 4.8h.3l.67-3.46c1.09-5.59 1.34-6.74 2.19-10.33l4.49-18.82h9.41zM228.17 127.8c2 2 2.8 4.92 2.8 10.87 0 13-2.31 15.54-13.91 15.54-6.74 0-10.2-1.21-12-4.06-1.39-2.37-1.7-4.5-1.7-11.66 0-6 .79-8.8 3-10.81 2.06-1.88 4.67-2.43 11.11-2.43 6.09 0 8.7.61 10.7 2.55zm-16.57 11.6c0 7.47.73 8.68 5.52 8.68s5.65-1.21 5.65-9.11c0-6.37-.85-7.59-5.52-7.59s-5.65 1.16-5.65 8.02zM244.39 125.56l-.18 4.37h.12c1.27-3.22 3.82-4.68 8.32-4.68 5.28 0 8.13 1.88 8.5 5.47h.12c1.15-3.77 3.82-5.47 8.68-5.47 3.82 0 6.86 1.28 8.26 3.4.85 1.34 1.27 3.4 1.27 6.38v18.88h-8.07v-16.58c0-4.37-.91-5.64-4.19-5.64-2.25 0-4.13.79-4.8 2a9.87 9.87 0 0 0-.55 3.58v16.64h-8.07v-17.12a8.51 8.51 0 0 0-.43-3.58c-.48-1-1.76-1.52-3.58-1.52-3.82 0-5.4 1.64-5.4 5.64v16.58h-8.08v-28.35zM311.36 144.62v.79a9.62 9.62 0 0 1-1.52 5.53c-1.7 2.3-4.79 3.27-10.74 3.27-6.26 0-9.48-.79-11.6-2.79s-2.85-5.22-2.85-12.08c0-6.19.72-9.17 2.73-11.17s5.28-2.92 10.74-2.92c10.33 0 13.24 2.92 13.24 13.42v2.49h-18.64a9.69 9.69 0 0 0-.06 1.15c0 4.86 1.21 6.14 5.65 6.14 4.13 0 5-.73 5.1-3.83zm-7.83-8.14a7.12 7.12 0 0 1-.06-1c-.06-3.7-.91-4.37-5.41-4.37-3.15 0-4.25.43-4.85 1.88-.31.73-.37 1.22-.43 3.46zM324.78 125.56l-.3 5.16h.18c1.4-3.89 3.88-5.47 8.56-5.47 4.43 0 7.47 1.28 8.86 3.71.73 1.33 1 2.61 1 5.28v19.67H335v-16.64c0-4.67-.73-5.64-4.25-5.64-4 0-5.89 1.76-5.89 5.58v16.7h-8.13v-28.35zM366 133.51c-.49-2.61-.85-2.85-5-2.85-2.61 0-3.4.12-4.07.54a2.78 2.78 0 0 0-.91 2.31c0 1.46.49 2.31 1.52 2.55.61.18 1.15.24 5.71.42 5.58.31 7.4.61 9 1.77s2.61 3.46 2.61 6.55-.91 5.53-2.73 7c-2.19 1.76-5 2.36-11.17 2.36-7.1 0-10.32-1-11.84-3.7-.85-1.34-1.09-2.67-1.09-5.53h8.31a3.71 3.71 0 0 0-.06.67c0 2.55.91 3.1 5.22 3.1s5.47-.61 5.47-3.1-.85-3.09-4-3.09c-5.34-.06-8.07-.31-10-.91-3.33-1-4.73-3.34-4.73-7.78 0-6.8 2.79-8.62 13.23-8.62 9.66 0 12.27 1.76 12.27 8.26zM427.33 153.91h-13.54l-4.19-16.64c-.91-3.82-1-3.94-1.88-8.56l-.61-2.85h-.36l-.61 2.85c-.91 4.19-1 4.68-2.06 8.56l-4.37 16.64h-13.36l-9.59-40.5h9.41l4.37 18.82c.79 3.59 1 4.38 2.06 10.33l.61 3.46h.36l.79-3.46c.25-1.1.55-2.25.79-3.4.18-1 1-3.83 1.76-6.93l5-18.82h10.14L417 132.3c1 3.7 1.52 5.95 2.13 8.92l1.09 4.8h.3l.67-3.46c1.09-5.59 1.33-6.74 2.19-10.33l4.49-18.82h9.41zM464.5 144.62v.79a9.62 9.62 0 0 1-1.52 5.53c-1.7 2.3-4.8 3.27-10.75 3.27-6.25 0-9.47-.79-11.6-2.79s-2.85-5.22-2.85-12.08c0-6.19.73-9.17 2.73-11.17s5.29-2.92 10.75-2.92c10.32 0 13.24 2.92 13.24 13.42v2.49h-18.64a9.69 9.69 0 0 0-.06 1.15c0 4.86 1.21 6.14 5.64 6.14 4.13 0 5-.73 5.1-3.83zm-7.84-8.14a7.12 7.12 0 0 1-.06-1c-.06-3.7-.91-4.37-5.4-4.37-3.16 0-4.25.43-4.86 1.88-.3.73-.36 1.22-.42 3.46zM495.4 144.62v.79a9.62 9.62 0 0 1-1.52 5.53c-1.7 2.3-4.79 3.27-10.74 3.27-6.26 0-9.47-.79-11.6-2.79s-2.85-5.22-2.85-12.08c0-6.19.73-9.17 2.73-11.17s5.28-2.92 10.75-2.92c10.32 0 13.23 2.92 13.23 13.42v2.49h-18.64a9.69 9.69 0 0 0-.06 1.15c0 4.86 1.22 6.14 5.65 6.14 4.13 0 5-.73 5.1-3.83zm-7.83-8.14a7.12 7.12 0 0 1-.06-1c-.06-3.7-.91-4.37-5.41-4.37-3.15 0-4.25.43-4.85 1.88-.31.73-.37 1.22-.43 3.46zM508.52 136.42h1.7l6.56-10.86h9.1L517 139l10.8 14.87h-9.65l-7.95-12.08h-1.64v12.08h-8.08v-40.5h8.08zM539.42 153.91h-8.07v-40.5h8.07zM563.83 155.73c-2 8.5-4.49 10.69-12.26 10.69-1 0-1.52 0-2.43-.06v-5.71a10.87 10.87 0 0 0 1.27.06c1.89 0 3-.42 3.71-1.34a12.23 12.23 0 0 0 1.76-5.46h-4.31l-8.81-28.35h8.5l3.22 11.77 1.58 5.89.73 2.92.79 3h.12c.73-3.82 1.58-7.77 2.43-11.78l2.55-11.77H571z" />
        </g>
        <path
          id="facebook-icon"
          d="M382.59 9H217.41A48.41 48.41 0 0 0 169 57.41v165.18A48.41 48.41 0 0 0 217.41 271h88.75V156.59h-15.88v-34.32h16V94.81c0-11.44 5.82-22.36 18.31-28.6 11.44-5.73 52.63 2.28 52.63 2.28V96h-24a8.93 8.93 0 0 0-5.72 2.29c-2.29 2.29-2.29 3.79-2.29 6.86v17.17h32l-5.72 34.32h-26.8V271h37.88A48.41 48.41 0 0 0 431 222.59V57.41A48.41 48.41 0 0 0 382.59 9z"
          fill="#fff"
        />
      </svg>
    );
  }
}

export default FollowFacebook;
