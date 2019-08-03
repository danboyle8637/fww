import React from "react";
import styled from "styled-components";

import { SectionContainer } from "../../styles/Containers";
import ResetHeader from "./ResetPrograms/ResetHeader";
import ResetProgramDashboard from "./ResetPrograms/ResetProgramDashboard";
import WorkoutCard from "./Shared/WorkoutCard";
import { above } from "../../styles/Theme";

const ResetProgram = () => {
  return (
    <SectionContainer>
      <ResetHeader />
      <ResetProgramDashboard />
      <ProgramCardGrid>
        <WorkoutCard workoutCard />
        <WorkoutCard workoutCard />
        <WorkoutCard workoutCard />
        <WorkoutCard workoutCard />
        <WorkoutCard workoutCard />
      </ProgramCardGrid>
    </SectionContainer>
  );
};

export default ResetProgram;

const ProgramCardGrid = styled.div`
  margin: 60px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 60px;
  `}
  ${above.ipadPro`
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 60px;
  `}
`;
