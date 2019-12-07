import React from "react";
import styled from "styled-components";

const ProgramNumWorkoutsSection = ({ numberOfWorkouts }) => {
  return (
    <SectionContainer>
      <FooterLabel label="true">Workouts</FooterLabel>
      <FooterLabel>{numberOfWorkouts}</FooterLabel>
    </SectionContainer>
  );
};

export default ProgramNumWorkoutsSection;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
`;

const FooterLabel = styled.p`
  font-family: Quicksand;
  font-size: 12px;
  color: ${props =>
    props.label ? props.theme.footerAddressText : props.theme.primaryAccent};
  text-transform: uppercase;
`;
