import React from "react";
import styled from "styled-components";

import { SectionContainer } from "../../styles/Containers";
import ResetHeader from "./ResetPrograms/ResetHeader";
import ProgressIndicator from "./ResetPrograms/ProgressIndicator";
import WorkoutCard from "./Shared/WorkoutCard";

const ResetProgram = () => {
  return (
    <SectionContainer>
      <ResetHeader />
      <ProgressIndicator />
      <TempCardContainer>
        <WorkoutCard workoutCard />
        <WorkoutCard workoutCard />
      </TempCardContainer>
    </SectionContainer>
  );
};

export default ResetProgram;

const TempCardContainer = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
