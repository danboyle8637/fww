import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import { Header3 } from "../../../styles/Headlines";
import { BodyText } from "../../../styles/BodyText";
import WorkoutHistoryChart from "./WorkoutHistoryChart";

const WorkoutHistory = () => {
  return (
    <WorkoutSectionContainer>
      <Header3 upper mobileMedium primary>
        Beat It?
      </Header3>
      <ElementContainer setMobileMarginTop={10}>
        <BodyText>
          Your tracking history for this workout. Can you beat these numbers?
        </BodyText>
      </ElementContainer>
      <WorkoutHistoryChart />
    </WorkoutSectionContainer>
  );
};

export default WorkoutHistory;

const WorkoutSectionContainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
