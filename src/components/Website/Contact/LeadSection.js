import React from "react";
import styled from "styled-components";

import { SectionGrid } from "../../../styles/GridContainer";
import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import ChatTextIcon from "../../../svgs/ChatTextIcon";
import Headline1 from "./Headlines/Headline1";
import LeadCopy from "./Copy/LeadCopy";
import { above } from "../../../styles/Theme";

const LeadSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <SectionGrid>
          <ChatBubble />
          <ContentWrapper>
            <Headline1 />
            <LeadCopy />
          </ContentWrapper>
        </SectionGrid>
      </ContentContainer>
    </SectionContainer>
  );
};

export default LeadSection;

const ChatBubble = styled(ChatTextIcon)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: end;
  width: 200px;
  transform: translate(0px, 60px);
  ${above.mobile`
    justify-self: center;
    transform: translate(100px, 0px);
  `}
  ${above.tablet`
    width: 240px;
    transform: translate(40px, 0px);
  `}
  ${above.ipadPro`
    width: 400px;
    transform: translate(60px, 40px) rotate(6deg);
  `}
`;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`;
