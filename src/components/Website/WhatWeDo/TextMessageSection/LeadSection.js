import React from "react";
import styled from "styled-components";

import {
  SectionContainer,
  ContentContainer,
} from "../../../../styles/Containers";
import TextMessageSection from "./TextMessageSection";
import Headline3 from "./Headline3";
import Headline1 from "./Headline1";
import Headline2 from "./Headline2";
import FWWLogo from "../../../../svgs/FWWLogo";
import IphoneX from "../../../../svgs/IphoneX";
import { above } from "../../../../styles/Theme";

const LeadSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <div id="what-we-do-lead" />
        <Headline3 />
      </ContentContainer>
      <TextMessageContainer>
        <TextMessageSection />
        <IPhoneBackground color="#101010" />
      </TextMessageContainer>
      <ContentContainer>
        <Headline1 />
        <Logo />
        <Headline2 />
      </ContentContainer>
    </SectionContainer>
  );
};

export default LeadSection;

const TextMessageContainer = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  max-width: 34rem;
  ${above.mobile`
    margin: 40px 0 0 0;
  `}
`;

const Logo = styled(FWWLogo)`
  margin: 80px 0;
  width: 180px;
  align-self: center;
`;

const IPhoneBackground = styled(IphoneX)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: center;
  ${above.mobile`
    width: 70%;
    justify-self: center;
  `}
`;
