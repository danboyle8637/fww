import React from "react";
import styled from "styled-components";

import { above } from "../../../styles/Theme";

const WorkoutLabel = ({ children }) => {
  return <LabelContainer>{children}</LabelContainer>;
};

export default WorkoutLabel;

const LabelContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2px 8px;
  display: flex;
  justify-content: flex-start;
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

//TODO: Add the swipe dots that turn to kettlebells if there are multiple workouts.
//const WorkoutCircles = styled.div``;
