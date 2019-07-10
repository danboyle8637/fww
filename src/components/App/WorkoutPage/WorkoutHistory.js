import React from "react";
import styled from "styled-components";

import { Header3 } from "../../../styles/Headlines";
import WorkoutHistoryChart from "./WorkoutHistoryChart";

const WorkoutHistory = () => {
  return (
    <WorkoutSectionContainer>
      <Header3 upper mobileMedium primary>
        Beat It?
      </Header3>
      <WorkoutHistoryChart />
    </WorkoutSectionContainer>
  );
};

export default WorkoutHistory;

const WorkoutSectionContainer = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
