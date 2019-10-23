import React from "react";
import styled from "styled-components";

import { SectionContainer, ElementContainer } from "../../../styles/Containers";
import { InnerButton } from "../../../styles/Buttons";
import Headline5 from "./Headlines/Headline5";
import Headline6 from "./Headlines/Headline6";
import CTACopy from "./Copy/CTACopy";

const CTASection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Headline5 />
        <CTACopy />
        <ElementContainer column alignCenter setMobileMarginTop={60}>
          <Headline6 />
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

const ContentContainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
