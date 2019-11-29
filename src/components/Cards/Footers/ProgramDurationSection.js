import React from "react";
import styled from "styled-components";

const ProgramDurationSection = ({ duration }) => {
  return (
    <SectionContainer>
      <FooterLabel label={"true"}>Duration</FooterLabel>
      <FooterLabel>{duration}</FooterLabel>
    </SectionContainer>
  );
};

export default ProgramDurationSection;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
`;

const FooterLabel = styled.p`
  font-family: QuicksandMedium;
  font-size: 12px;
  color: ${props =>
    props.label ? props.theme.footerAddressText : props.theme.primaryAccent};
  text-transform: uppercase;
`;
