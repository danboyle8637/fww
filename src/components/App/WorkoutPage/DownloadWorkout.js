import React from "react";
import styled from "styled-components";

import { Header3 } from "../../../styles/Headlines";
import { BodyText } from "../../../styles/BodyText";
import DownloadIcon from "../../../svgs/DownloadIcon";

const DownloadWorkout = () => {
  return (
    <WorkoutSectionContainer>
      <Header3 upper mobileMedium primary>
        Download It:
      </Header3>
      <BodyText setMobileMarginTop={10}>
        Download the tracking sheet if you want to track this workout in detail.
      </BodyText>
      <Download />
    </WorkoutSectionContainer>
  );
};

export default DownloadWorkout;

const WorkoutSectionContainer = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Download = styled(DownloadIcon)`
  margin: 40px 0 0 0;
  align-self: center;
  width: 120px;
`;
