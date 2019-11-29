import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

import IgniteResetLogo from "../../../svgs/IgniteResetLogo";
import BodyBurnResetLogo from "../../../svgs/BodyBurnResetLogo";
import StrongResetLogo from "../../../svgs/StrongResetLogo";

const ResetProgramCardHeader = ({ programId, coverImage, altText }) => {
  return (
    <ProgramHeaderGrid>
      <ProgramBackgroundWrapper>
        <ProgramBackgroundImage
          fluid={coverImage}
          alt={altText}
          title={altText}
        />
      </ProgramBackgroundWrapper>
      {programId === "7DayIgniteReset" ? <IgniteLogo /> : null}
      {programId === "7DayBodyBurnReset" ? <BodyBurnLogo /> : null}
      {programId === "7DayStrongReset" ? <StrongLogo /> : null}
    </ProgramHeaderGrid>
  );
};

export default ResetProgramCardHeader;

const ProgramHeaderGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 10px 10px 0 0;
  width: 100%;
`;

const ProgramBackgroundWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
`;

const ProgramBackgroundImage = styled(Image)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px 10px 0 0;
  width: 100%;
`;

const IgniteLogo = styled(IgniteResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 1;
`;

const BodyBurnLogo = styled(BodyBurnResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 1;
`;

const StrongLogo = styled(StrongResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 1;
`;
