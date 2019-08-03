import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { above } from "../../../styles/Theme";

const WorkoutLabel = ({ label, numWorkouts, children }) => {
  const [workoutDots, setWorkoutDots] = useState([]);
  const [activeWorkout, setActiveWorkout] = useState([]);

  useEffect(() => {
    const dotArray = [];
    const activeArray = [];

    for (let i = 0; i < numWorkouts; i++) {
      dotArray.push(i);
      if (i === 0) {
        activeArray.push(true);
      } else {
        activeArray.push(false);
      }
    }

    setWorkoutDots(dotArray);
    setActiveWorkout(activeArray);
  }, [numWorkouts]);

  const videoDots = workoutDots.map((number, index) => (
    <VideoDot key={number} active={activeWorkout[index]} />
  ));

  return (
    <LabelContainer>
      {children}
      {label === "workout" ? <>{videoDots}</> : null}
    </LabelContainer>
  );
};

export default WorkoutLabel;

const LabelContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2px 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px 0 0 0;
  font-size: 13px;
  font-weight: 200;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background: rgba(0, 0, 0, 0.6);
  ${above.mobile`
    font-size: 16px;
  `}
  ${above.tablet`
    font-size: 18px;
  `}
  ${above.ipadPro`
    font-size: 20px;
  `}
`;

const VideoDot = styled.div`
  margin: 0 0 0 8px;
  border: 2px solid ${props => props.theme.footerAddressText};
  background-color: ${props =>
    props.active ? props.theme.tertiaryAccent : "transparent"};
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;

//TODO: Add the swipe dots that turn to kettlebells if there are multiple workouts.
//const WorkoutCircles = styled.div``;
