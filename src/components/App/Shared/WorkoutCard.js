import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Header3 } from "../../../styles/Headlines";
import NavigationArrow from "../../../svgs/NavigationArrow";
import AppButton from "../../../svgs/AppButton";
import WorkoutCardHeader from "../Shared/WorkoutProgramCard/WorkoutCardHeader";
import ProgramCardHeader from "../Shared/WorkoutProgramCard/ProgramCardHeader";
import WorkoutCardInfoFooter from "./WorkoutProgramCard/WorkoutCardInfoFooter";
import ProgramInfoFooter from "../Shared/WorkoutProgramCard/ProgramInfoFooter";
import { above } from "../../../styles/Theme";

const WorkoutCard = ({ workoutCard, programCard }) => {
  return (
    <WorkoutCardGrid>
      {workoutCard && <WorkoutCardHeader />}
      {programCard && <ProgramCardHeader />}
      <ContentWrapper>
        <DescriptionWrapper>
          <TextWrapper>
            <Header3 mobileSmall primary>
              7 Day Body Burn Reset
            </Header3>
            <Description>
              Let’s perfect and practice our pushups with this sweaty... tough
              workout.
            </Description>
          </TextWrapper>
          <ArrowButton />
        </DescriptionWrapper>
        {workoutCard && <WorkoutCardInfoFooter />}
        {programCard && <ProgramInfoFooter />}
      </ContentWrapper>
    </WorkoutCardGrid>
  );
};

export default WorkoutCard;

const WorkoutCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 5px;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px;
  width: 100%;
  max-width: 360px;
  box-shadow: none;
  transform: translateY(0);
  transition: box-shadow, transform, 200ms ease-in-out;
  &:hover {
    box-shadow: 2px 2px 12px 4px rgba(71, 74, 221, 0.3);
    transform: translateY(-2%);
    cursor: pointer;
  }
  ${above.mobile`
    width: 100%;
  `}
`;

const ContentWrapper = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
`;

const ArrowButton = styled(AppButton)`
  margin: 0 0 0 0;
  width: 50px;
  align-self: center;
  justify-self: center;
`;
