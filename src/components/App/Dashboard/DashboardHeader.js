import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import { BodyText } from "../../../styles/BodyText";
import FWWLogo from "../../../svgs/FWWLogo";
import ProgramKey from "./ProgramKey";
import { above } from "../../../styles/Theme";

const DashboardHeader = () => {
  return (
    <ElementContainer justifyCenter>
      <Logo />
      <ElementContainer column alignCenter setMobileMarginTop={20}>
        <BodyText>Welcome Dan!</BodyText>
        <KeyWrapper>
          <ProgramKey active={true}>Active Reset Program</ProgramKey>
          <ProgramKey>Not Part Of Your Account</ProgramKey>
        </KeyWrapper>
      </ElementContainer>
    </ElementContainer>
  );
};

export default DashboardHeader;

const Logo = styled(FWWLogo)`
  width: 140px;
  ${above.mobile`
    width: 220px;
  `}
`;

const KeyWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr 1fr;
  row-gap: 10px;
`;
