import React from "react";
import styled from "styled-components";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import { InnerButton } from "../../../styles/Buttons";
import ResetFWWLogo from "../../../svgs/7DayResetFWWLogo";
import Headline5 from "./Headlines/Headline5";
import CTACopy from "./Copy/CTACopy";

const CTASection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline5 />
        <CTACopy />
        <ElementContainer column alignCenter setMobileMarginTop={60}>
          <ResetLogo />
          <ElementContainer setMobileMarginTop={40}>
            <InnerButton to={"/7-day-reset-step1"}>
              Join a Reset Program For Free
            </InnerButton>
          </ElementContainer>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default CTASection;

const ResetLogo = styled(ResetFWWLogo)`
  width: 200px;
`;
