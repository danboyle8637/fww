import React from "react";
import styled from "styled-components";

import ProgramCardFooter from "./Footers/ProgramCardFooter";
import ResetProgramCardHeader from "./Headers/ResetProgramCardHeader";
import { above } from "../../styles/Theme";

const ChooseResetProgramCard = ({
  programId,
  description,
  fitnessLevel,
  numberOfWorkouts,
  duration,
  coverImage,
  altText,
}) => {
  return (
    <CardGrid>
      <CardContainer>
        <ResetProgramCardHeader
          programId={programId}
          coverImage={coverImage}
          altText={altText}
        />
        <DescriptionWrapper dangerouslySetInnerHTML={{ __html: description }} />
        <ProgramCardFooter
          fitnessLevel={fitnessLevel}
          numberOfWorkouts={numberOfWorkouts}
          duration={duration}
        />
      </CardContainer>
    </CardGrid>
  );
};

export default ChooseResetProgramCard;

const CardGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 10px 10px 40px 10px;
  transition: box-shadow 300ms ease-in-out;
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.tertiaryAccent};
    }
  `}
`;

const CardContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px 10px 40px 10px;
  width: 100%;
  max-width: 390px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
`;

const DescriptionWrapper = styled.div`
  margin: 8px 0 0 0;
  padding: 8px;
  font-family: QuicksandSemiBold;
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.theme.bodyText};
`;
