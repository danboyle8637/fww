import React from "react";
import styled from "styled-components";

import { SectionContainer, AppContentContainer } from "../../styles/Containers";
import DashboardHeader from "./Dashboard/DashboardHeader";
import WorkoutCard from "./Shared/WorkoutCard";
import { above } from "../../styles/Theme";

const Dashboard = () => {
  return (
    <SectionContainer>
      <AppContentContainer>
        <DashboardHeader />
        <ProgramCardGrid>
          <WorkoutCard programCard />
          <WorkoutCard programCard />
          <WorkoutCard programCard />
        </ProgramCardGrid>
      </AppContentContainer>
    </SectionContainer>
  );
};

export default Dashboard;

const ProgramCardGrid = styled.div`
  margin: 60px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  align-items: start;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 60px;
  `}
  ${above.ipadPro`
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  `}
`;
