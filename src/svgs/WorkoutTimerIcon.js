import React, { Component } from "react";

class WorkoutTimerIcon extends Component {
  render() {
    const { width, height, className } = this.props;

    return (
      <svg
        id="workout-clock"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 237 237"
      >
        <path
          d="M122.28 6.67a118.5 118.5 0 1 0 118.5 118.5 118.49 118.49 0 0 0-118.5-118.5zm0 209a90.5 90.5 0 1 1 90.5-90.5 90.5 90.5 0 0 1-90.5 90.5z"
          transform="translate(-3.78 -6.67)"
          fill="#141414"
          id="clock"
        />
        <circle cx="118.5" cy="118.5" r="90.5" fill="#8b53f6" id="extra-time" />
        <circle cx="118.5" cy="118.5" r="90.5" fill="#5afdf2" id="time" />
      </svg>
    );
  }
}

export default WorkoutTimerIcon;
