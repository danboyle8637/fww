import React from "react";
import styled from "styled-components";

import { Header3 } from "../../../styles/Headlines";
import { BodyText } from "../../../styles/BodyText";
import CompleteWorkoutCheck from "./CompleteWorkoutCheck";
import FavoriteWorkoutCheck from "./FavoriteWorkoutCheck";

const CompleteWorkout = () => {
  return (
    <WorkoutSectionContainer>
      <Header3 upper mobileMedium primary>
        Complete It:
      </Header3>
      <BodyText setMobileMarginTop={10}>
        When you’ve completed the workout, check it off your list!
      </BodyText>
      <CompleteWorkoutCheck />
      <FavoriteWorkoutCheck />
    </WorkoutSectionContainer>
  );
};

export default CompleteWorkout;

const WorkoutSectionContainer = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
