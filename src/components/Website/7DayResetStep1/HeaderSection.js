import React from "react";
import styled from "styled-components";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import { Header1 } from "../../../styles/Headlines";
import { BodyText } from "../../../styles/BodyText";
import SevenDayResetFWWLogo from "../../../svgs/7DayResetFWWLogo";

const HeaderSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <ElementContainer column>
          <ResetMainLogo />
          <ElementContainer column setMobileMarginTop={20}>
            <Header1
              primary
              mobileMedium
              setMLineHeight={1.4}
              setTLineHeight={1.4}
              setIpadLineHeight={1.4}
              setLLineHeight={1.4}
            >
              Step 1:
            </Header1>
            <BodyText>How can I help you hit your goals?</BodyText>
          </ElementContainer>
        </ElementContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeaderSection;

const ResetMainLogo = styled(SevenDayResetFWWLogo)`
  align-self: center;
  width: 220px;
`;
