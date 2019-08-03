import React from "react";
import styled from "styled-components";

import { Header3 } from "../../../styles/Headlines";
import { BodyText } from "../../../styles/BodyText";
import WorkoutTrackingForm from "./WorkoutTrackingForm";

const WorkoutTracking = () => {
  return (
    <GoalContainer>
      <Header3 upper mobileMedium secondary>
        Track It:
      </Header3>
      <BodyText setMobileMarginTop={10}>
        How many straight pushups were you able to complete from the ground?
      </BodyText>
      <WorkoutTrackingForm />
    </GoalContainer>
  );
};

export default WorkoutTracking;

const GoalContainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;
