import React from "react";
import styled from "styled-components";

import ProgramFitnessLevelSection from "./ProgramFitnessLevelSection";
import ProgramNumWorkoutsSection from "./ProgramNumWorkoutsSection";
import ProgramDurationSection from "./ProgramDurationSection";
import NavigationArrow from "../../../svgs/NavigationArrow";

const ProgramProductCardFooter = ({
  fitnessLevel,
  numberOfWorkouts,
  duration,
}) => {
  return (
    <FooterContainer>
      <ProgramFitnessLevelSection fitnessLevel={fitnessLevel} />
      <ProgramNumWorkoutsSection numberOfWorkouts={numberOfWorkouts} />
      <ProgramDurationSection duration={duration} />
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    </FooterContainer>
  );
};

export default ProgramProductCardFooter;

const FooterContainer = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 8px;
  align-items: center;
`;

const ArrowContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.accentBackgroundColor};
  border-radius: 50%;
  width: 52px;
  height: 52px;
`;

const Arrow = styled(NavigationArrow)`
  width: 20px;
`;
