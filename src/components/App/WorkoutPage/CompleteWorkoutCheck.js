import React from "react";
import styled from "styled-components";

import WorkoutCheckmark from "../../../svgs/WorkoutCheckmark";
import "./WorkoutPage.css";

const CompleteWorkoutCheck = () => {
  return (
    <WorkoutCompleteRow>
      <CompletedLabel>Mark Completed:</CompletedLabel>
      <CheckmarkWrapper>
        <CheckCircle />
        <CheckCircle />
        <CheckCircle />
      </CheckmarkWrapper>
    </WorkoutCompleteRow>
  );
};

export default CompleteWorkoutCheck;

const WorkoutCompleteRow = styled.div`
  margin: 40px 0 0 0;
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

const CompletedLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
`;

const CheckmarkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 10px;
`;

const CheckCircle = styled(WorkoutCheckmark)`
  width: 50px;
`;
