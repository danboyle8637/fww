import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Header3 } from "../../../styles/Headlines";
import NavigationArrow from "../../../svgs/NavigationArrow";
import WorkoutCardHeader from "../Shared/WorkoutProgramCard/WorkoutCardHeader";
import ProgramCardHeader from "../Shared/WorkoutProgramCard/ProgramCardHeader";
import WorkoutCardInfoFooter from "./WorkoutProgramCard/WorkoutCardInfoFooter";
import ProgramInfoFooter from "../Shared/WorkoutProgramCard/ProgramInfoFooter";
import { above } from "../../../styles/Theme";

const WorkoutCard = ({ workoutCard, programCard }) => {
  // When you convert to Typescript, switch this to an enum
  const [cardType, setCardType] = useState("workout");

  useEffect(() => {
    if (workoutCard) {
      setCardType("workout");
    }

    if (programCard) {
      setCardType("program");
    }
  }, [cardType]);

  return (
    <WorkoutCardGrid>
      {cardType === "workout" && <WorkoutCardHeader />}
      {cardType === "program" && <ProgramCardHeader />}
      <ContentWrapper>
        <DescriptionWrapper>
          <TextWrapper>
            <Header3 mobileSmall primary>
              Workout 1: Pushups
            </Header3>
            <Description>
              Let’s perfect and practice our pushups with this sweaty... tough
              workout.
            </Description>
          </TextWrapper>
          <ArrowButton />
        </DescriptionWrapper>
        {cardType === "workout" && <WorkoutCardInfoFooter />}
        {cardType === "program" && <ProgramInfoFooter />}
      </ContentWrapper>
    </WorkoutCardGrid>
  );
};

export default WorkoutCard;

const WorkoutCardGrid = styled.div`
  margin: 60px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 5px;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 6px;
  width: 95%;
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

const ArrowButton = styled(NavigationArrow)`
  margin: 0 30px 0 0;
  width: 20px;
  align-self: center;
  justify-self: center;
`;
