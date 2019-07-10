import React from "react";
import styled from "styled-components";

import { SectionContainer } from "../../../styles/Containers";
import { BodyText } from "../../../styles/BodyText";

const WorkoutDetails = () => {
  return (
    <SectionContainer>
      <WorkoutSectionContainer>
        <BodyText>Workout details page... nested!</BodyText>
      </WorkoutSectionContainer>
    </SectionContainer>
  );
};

export default WorkoutDetails;

const WorkoutSectionContainer = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
