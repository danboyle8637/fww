// These are the favorite and completed buttons
import React from "react";
import styled from "styled-components";

const WorkoutCardInfoFooter = () => {
  return (
    <InfoIconWrapper>
      <InfoButton />
      <InfoButton />
    </InfoIconWrapper>
  );
};

export default WorkoutCardInfoFooter;

const InfoIconWrapper = styled.div`
  margin: 8px 0 0 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
`;

const InfoButton = styled.div`
  background: transparent;
  border: 2px solid ${props => props.theme.mainBackgroundColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
