import React from "react";
import styled from "styled-components";

import { SectionContainer, ElementContainer } from "../../../styles/Containers";
import OutsideButton from "../../Buttons/OutsideButton";
import Headline5 from "./Headlines/Headline5";
import Headline6 from "./Headlines/Headline6";
import CTACopy from "./Copy/CTACopy";

const CTASection = () => {
  const link = "https://reset.fitwomensweekly.com";

  return (
    <SectionContainer>
      <ContentContainer>
        <Headline5 />
        <CTACopy />
        <ElementContainer column alignCenter setMobileMarginTop={60}>
          <Headline6 />
          <ElementContainer setMobileMarginTop={40}>
            <OutsideButton linkLocation={link}>
              Join a Reset Program For Free
            </OutsideButton>
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
