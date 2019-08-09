import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { AppContentContainer } from "../../../styles/App";
import TrainingPlan from "./TrainingPlan";
import ProgressIndicator from "./ProgressIndicator";
import WeekCalendar from "./WeekCalendar";
import { above } from "../../../styles/Theme";

const ResetProgramDashboard = () => {
  return (
    <AppContentContainer>
      <DashboardContainer>
        <ProgressWrapper>
          <ProgressIndicator />
        </ProgressWrapper>
        <TrainingPlanWrapper>
          <WeekCalendar />
          <TrainingPlan />
        </TrainingPlanWrapper>
      </DashboardContainer>
    </AppContentContainer>
  );
};

export default ResetProgramDashboard;

const DashboardContainer = styled.div`
  margin: 60px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  align-items: center;
  ${above.mobile`
    grid-template-columns: 220px 320px;
    grid-template-rows: 1fr;
  `}
`;

const ProgressWrapper = styled.div`
  padding: 20px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.baseBackgroundColor};
  align-items: center;
  justify-items: center;
  height: 100%;
  border-radius: 8px;
`;

const TrainingPlanWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 10px;
`;
